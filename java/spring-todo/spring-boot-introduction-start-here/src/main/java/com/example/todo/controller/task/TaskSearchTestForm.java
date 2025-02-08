package com.example.todo.controller.task;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * テスト用の検索フォーム
 */
@Data
public class TaskSearchTestForm {

    /**
     * タスクID
     */
    @NotBlank
    @Pattern(regexp = "\\d+", message = "数字を入力してください")
    @Size(max = 16, message = "16文字以内で入力してください")
    private String id;
}
