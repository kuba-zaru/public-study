package com.example.todo.controller.task;

import com.example.todo.service.task.TaskSearcEntity;
import com.example.todo.service.task.TaskStatus;

import java.util.List;
import java.util.Optional;

public record TaskSearchForm(
        String summary,
        List<String> status
) {

    /**
     * タスク検索条件をEntityに変換する
     *
     * @return task検索条件
     */
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

    /**
     * チェックボックスの状態を取得する
     *
     * @param targetStatus チェック対象のステータス
     * @return true: チェックされている, false: チェックされていない
     */
    public boolean isChecked(String targetStatus) {
        return Optional.ofNullable(status).orElse(List.of()).contains(targetStatus);
    }
}