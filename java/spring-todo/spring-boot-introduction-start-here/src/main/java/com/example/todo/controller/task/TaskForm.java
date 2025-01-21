package com.example.todo.controller.task;


import com.example.todo.service.task.TaskEntity;
import com.example.todo.service.task.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 * Taskの入力フォーム
 *
 * @param summary     概要
 * @param description 詳細
 * @param status      ステータス
 */
public record TaskForm(
        @NotBlank
        @Size(max = 256, message = "256文字以内で入力してください")
        String summary,
        String description,
        @NotBlank
        @Pattern(regexp = "TODO|DOING|DONE", message = "Todo, Doing, Doneのいずれかを入力してください")
        String status) {

    /**
     * TaskFormに変換する
     *
     * @return TaskForm
     */
    public static TaskForm fromEntity(TaskEntity taskEntity) {
        return new TaskForm(
                taskEntity.summary(),
                taskEntity.description(),
                taskEntity.status().toString());
    }

    /**
     * Entityに変換する
     *
     * @return TaskEntity
     */
    public TaskEntity toEntity() {
        return toEntity(null);
    }

    /**
     * Entityに変換する
     *
     * @return TaskEntity
     */
    public TaskEntity toEntity(Long id) {
        return new TaskEntity(
                id,
                summary,
                description,
                TaskStatus.valueOf(status()));
    }
}
