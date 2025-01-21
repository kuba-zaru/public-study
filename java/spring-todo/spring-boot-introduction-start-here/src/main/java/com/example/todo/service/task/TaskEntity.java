package com.example.todo.service.task;

/**
 * Task
 *
 * @param id          ID
 * @param summary     概要
 * @param description 詳細
 * @param status      ステータス
 */
public record TaskEntity(
        Long id,
        String summary,
        String description,
        TaskStatus status
) {
}
