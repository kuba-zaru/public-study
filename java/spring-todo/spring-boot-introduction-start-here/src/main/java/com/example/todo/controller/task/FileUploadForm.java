package com.example.todo.controller.task;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * ファイルアップロードの入力フォーム
 */
@Data
public class FileUploadForm {

    /**
     * ファイル
     */
    private MultipartFile file;
}
