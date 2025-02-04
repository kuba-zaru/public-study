package com.example.todo.controller.task;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

/**
 * ファイルアップロードの入力フォーム
 */
@Setter
@Getter
@ToString
public class FileUploadForm {

    /**
     * ファイル
     */
    private MultipartFile file;
}
