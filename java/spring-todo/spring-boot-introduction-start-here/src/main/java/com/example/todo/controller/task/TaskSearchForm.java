package com.example.todo.controller.task;

import com.example.todo.service.task.TaskSearcEntity;
import com.example.todo.service.task.TaskStatus;

import java.util.List;

public record TaskSearchForm(
        String summary,
        List<String> status
) {

    public TaskSearcEntity toEntity() {
        return new TaskSearcEntity(
                this.summary,
                this.status != null
                        ? this.status.stream()
                        .map(TaskStatus::valueOf)
                        .toList()
                        : List.of()
        );
    }
}