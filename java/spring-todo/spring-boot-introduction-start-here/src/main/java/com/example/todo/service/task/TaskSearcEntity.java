package com.example.todo.service.task;

import java.util.List;

public record TaskSearcEntity(
        String summary,
        List<TaskStatus> status
) {
}