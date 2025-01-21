package com.example.todo.service.task;

import com.example.todo.repository.task.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * TaskService
 */
@Service
@RequiredArgsConstructor
public class TaskService {

    /**
     * TaskRepository
     */
    private final TaskRepository taskRepository;

    /**
     * taskを全件取得する
     *
     * @return taskリスト
     */
    public List<TaskEntity> find() {
//        テストコード
//        var task1 = new TaskEntity(
//                1L,
//                "String Bootを学ぶ",
//                "TODOアプリケーションを作ってみる",
//                TaskStatus.TODO);
//        var task2 = new TaskEntity(
//                2L,
//                "String Securityを学ぶ",
//                "ログイン機能を作ってみる",
//                TaskStatus.DOING);
//        var taskList = List.of(task1, task2);

        // DBからselectする
        var taskList = taskRepository.select();

        return taskList;
    }

    /**
     * taskを1件取得する
     *
     * @param taskId タスクID
     * @return task
     */
    public Optional<TaskEntity> findById(long taskId) {
        return taskRepository.selectById(taskId);
    }

    /**
     * taskを作成する
     *
     * @param newEntity 新規タスク
     */
    @Transactional
    public void create(TaskEntity newEntity) {
        // タスクを登録する
        taskRepository.insert(newEntity);
    }

    /**
     * taskを更新する
     *
     * @param entity 更新タスク
     */
    @Transactional
    public void update(TaskEntity entity) {
        // タスクを更新する
        taskRepository.update(entity);
    }

    /**
     * taskを削除する
     *
     * @param taskId タスクID
     */
    @Transactional
    public void delete(long taskId) {
        // タスクを削除する
        taskRepository.delete(taskId);
    }
}
