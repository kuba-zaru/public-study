package com.example.todo.controller.task;

import com.example.todo.service.task.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

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
    public String list(TaskSearchForm taskSearchForm, Model model) {
        System.out.println("TaskController.list start...");
        System.out.println(taskSearchForm);

        // taskテーブルを取得する
        var taskListEntity = taskService.find(taskSearchForm.toEntity());

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

    /**
     * テストコード
     * フォーム２画面を表示する
     *
     * @param taskForm フォーム２
     * @param model    Model
     * @return テンプレートファイル名
     */
    @GetMapping("/tasks/form2")
    public String showForm2(@ModelAttribute TaskForm taskForm, Model model) {
        return "tasks/form2";
    }

    /**
     * テストコード
     * フォーム２の後続処理
     *
     * @param taskForm
     * @param bindingResult
     * @param model
     * @return
     */
    @PostMapping("/tasks/create2")
    public String create2(@Validated TaskForm taskForm, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            // エラーの場合は、作成画面に戻る
            return showForm2(taskForm, model);
        }

        // テスト用のコードなのでコメントアウト
        //　taskService.create(taskForm.toEntity());

        // とりあえず一覧画面にリダイレクトする
        return "redirect:/";
    }

    /**
     * ファイルアップロード画面を表示する
     *
     * @param fileUploadForm ファイルアップロードフォーム
     * @param model          Model
     * @return ファイルアップロード画面
     */
    @GetMapping("/tasks/file-upload")
    public String showFileUploadForm(@ModelAttribute FileUploadForm fileUploadForm, Model model) {
        return "tasks/form-file-upload";
    }

    /**
     * ファイルをアップロードする
     *
     * @param fileUploadForm ファイルアップロードフォーム
     * @param bindingResult  バインディング結果
     * @param model          Model
     * @return xxx画面
     */
    @PostMapping("/tasks/file-upload")
    public String uploadFile(@ModelAttribute FileUploadForm fileUploadForm,
                             BindingResult bindingResult,
                             Model model) {

        if (fileUploadForm.getFile().isEmpty()) {
            // エラーの場合
            // エラーメッセージを設定する
            // TODO: エラーメッセージを画面に表示する箇所が未実装
            bindingResult.rejectValue("file", "error.fileUploadForm", "ファイルを選択してください");
            // 元の画面に戻る
            return showFileUploadForm(fileUploadForm, model);
        }

//        List<String> fileData = new ArrayList<String>();
        FileContentsDTO fileContentsDTO = new FileContentsDTO();

        // TODO: ファイルアップロード処理を実装する
        try {
            // ファイル名を表示する
            System.out.println("ファイル: " + fileUploadForm.getFile().getOriginalFilename());
            // ファイルの内容を表示する
            System.out.println(new String(fileUploadForm.getFile().getBytes()));

            // ファイル名を設定する
            fileContentsDTO.setFileName(fileUploadForm.getFile().getOriginalFilename());

            // ファイルの内容を改行コードごとにリストに格納する
            // TODO: ファイルの内容はlistにすべきだが、実装の都合上Stringで実装している。
            fileContentsDTO.setContents(new String(fileUploadForm.getFile().getBytes()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        // 表示用のデータを設定する
        model.addAttribute("fileContentsDTO", fileContentsDTO);

        // ファイル内容を表示する
        return "/tasks/show-file-contents";
    }

    /**
     * タスク検索テスト
     *
     * @param taskSearchTestForm フォーム
     * @return タスク検索画面
     */
    @GetMapping("/tasks/search-task-test")
    public String searchTaskTest(
            @ModelAttribute TaskSearchTestForm taskSearchTestForm) {

        // デフォルト値を設定する
        // NOTE: 本来は初期値を設定する処理をControllerで行うべきではないが、学習のために記載している。
        taskSearchTestForm.setId("1");

        return "/tasks/search-task-test";
    }

    /**
     * タスク検索テスト
     *
     * @param taskSearchTestForm フォーム
     * @param model              Model
     * @return タスク検索画面
     */
    @PostMapping("/tasks/search-task-test")
    public String searchResultTaskTest(
            @ModelAttribute @Validated TaskSearchTestForm taskSearchTestForm,
            BindingResult bindingResult,
            Model model) {

        // 入力値を表示する
        System.out.println("入力値: " + taskSearchTestForm);

        if (bindingResult.hasErrors()) {
            // エラーの場合は、作成画面に戻る
            return searchTaskTest(taskSearchTestForm);
        }

        // taskを検索する
        var taskListEntity = taskService.findById(Long.parseLong(taskSearchTestForm.getId()));

        // エラーメッセージを設定する
        if (taskListEntity.isEmpty()) {
            model.addAttribute("errorMessage", "Taskが見つかりませんでした。");
            return "/tasks/search-task-test";
        }

        // EntityからDTOに変換する
        var taskDTO = taskListEntity.map(TaskDTO::toDTO).orElse(null);

        // modelに画面情報を設定する
        model.addAttribute("task", taskDTO);

        return "/tasks/search-task-test";
    }

    /**
     * 計算テスト
     */
    @GetMapping("/tasks/calc-1")
    public String searchTaskTest() {


        return "/tasks/calc-1";
    }
}
