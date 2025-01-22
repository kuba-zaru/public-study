package com.example.todo.controller.task;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ファイルアップロードの入力フォーム
 */
@Setter
@Getter
@ToString
public class FileUploadForm {
    // TODO: 拡張子チェック
    @NotBlank
    @Size(max = 256, message = "256文字以内で入力してください")
    String fileName;
}
