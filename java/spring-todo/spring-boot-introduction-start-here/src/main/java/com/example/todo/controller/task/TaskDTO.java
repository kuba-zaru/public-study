package com.example.todo.controller.task;

import com.example.todo.service.task.TaskEntity;

/**
 * TaskのDTO
 *
 * @param id          ID
 * @param summary     概要
 * @param description 詳細
 * @param status      ステータス
 */
public record TaskDTO(
        long id,
        String summary,
        String description,
        String status
) {
    /**
     * TaskDTOに変換する
     *
     * @param entity TaskEntity
     * @return TaskDTO
     */
    public static TaskDTO toDTO(TaskEntity entity) {
        return new TaskDTO(
                entity.id(),
                entity.summary(),
                entity.description(),
                entity.status().name()
        );
    }
}
