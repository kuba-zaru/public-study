package com.example.todo.controller.task;

import com.example.todo.service.task.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * TaskController
 */
@Controller
@RequiredArgsConstructor
public class TaskController {

    /**
     * TaskService
     */
    private final TaskService taskService;

    /**
     * タスク一覧画面を表示する
     *
     * @param model Model
     * @return テンプレートファイル名
     */
    @GetMapping("/tasks")
    public String list(Model model) {
        System.out.println("TaskController.list start...");

        // taskテーブルを取得する
        var taskListEntity = taskService.find();

        // EntityからDTOに変換する
        // NOTE:変換はtaskDTO側に記載するほうがベターだが、学習のためにController内に記載している。
        var taskList = taskListEntity
                .stream()
                .map(entity -> new TaskDTO(
                        entity.id(),
                        entity.summary(),
                        entity.description(),
                        entity.status().name()
                )).toList();
        System.out.println(taskList);

        // modelに画面情報を設定する
        model.addAttribute("taskList", taskList);

        return "tasks/list";
    }

    /**
     * タスク詳細画面を表示する
     *
     * @param taskId タスクID
     * @param model  Model
     * @return テンプレートファイル名
     */
    @GetMapping("/tasks/{taskId}")
    public String showDetail(@PathVariable("taskId") long taskId, Model model) {

        // taskテーブルから指定したtaskを取得する
        var taskDTO = taskService.findById(taskId)
                .map(TaskDTO::toDTO)
                .orElseThrow(() -> new IllegalArgumentException("Taskがありません" + " taskId = " + taskId));
        System.out.println(taskDTO);

        // modelに画面情報を設定する
        model.addAttribute("task", taskDTO);

        return "tasks/detail";
    }

    /**
     * タスク作成画面を表示する
     *
     * @return タスク作成画面
     */
    @GetMapping("/tasks/creationForm")
    public String showCreationForm(@ModelAttribute TaskForm taskForm, Model model) {

        // modelに画面情報を設定する
        model.addAttribute("mode", "CREATE");

        // タスク作成画面を表示する
        return "tasks/form";
    }

    /**
     * タスクを作成する
     *
     * @param form          TaskForm
     * @param bindingResult BindingResult
     * @param model         Model
     * @return 一覧画面
     */
    @PostMapping("/tasks")
    public String create(@Validated TaskForm form, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            // エラーがある場合は、作成画面に戻る
            return showCreationForm(form, model);
        }

        // タスクを登録する
        taskService.create(form.toEntity());

        // 一覧画面にリダイレクトする(二重サブミットを防ぐため)
        return "redirect:/tasks";
    }

    /**
     * タスク編集画面を表示する
     *
     * @param taskId タスクID
     * @param model  Model
     * @return タスク編集画面
     */
    @GetMapping("/tasks/{taskId}/editForm")
    public String showEditForm(@PathVariable("taskId") long taskId, Model model) {

        // taskテーブルから指定したtaskを取得する
        var taskForm = taskService.findById(taskId)
                .map(TaskForm::fromEntity)
                .orElseThrow(TaskNotFoundException::new);
        System.out.println(taskForm);

        // modelに画面情報を設定する
        model.addAttribute("mode", "EDIT");
        model.addAttribute("taskForm", taskForm);

        // タスク編集画面を表示する
        return "tasks/form";
    }

    /**
     * タスクを更新する
     *
     * @param taskId        タスクID
     * @param taskForm      TaskForm
     * @param bindingResult BindingResult
     * @return 一覧画面
     */
    @PutMapping("/tasks/{taskId}")
    public String update(
            @PathVariable("taskId")
            long taskId,
            @Validated
            @ModelAttribute
            TaskForm taskForm,
            BindingResult bindingResult,
            Model model) {

        if (bindingResult.hasErrors()) {
            // エラーがある場合は、編集画面に戻る
            model.addAttribute("mode", "EDIT");
            return "tasks/form";
        }

        // タスクを更新する
        taskService.update(taskForm.toEntity(taskId));

        // 詳細画面にリダイレクトする
        return "redirect:/tasks/{taskId}";
    }

    /**
     * タスクを削除する
     *
     * @param taskId タスクID
     * @return 一覧画面
     */
    @DeleteMapping("/tasks/{taskId}")
    public String update(
            @PathVariable("taskId")
            long taskId) {

        // タスクを削除する
        taskService.delete(taskId);

        // 一覧画面にリダイレクトする
        return "redirect:/tasks";
    }
}
