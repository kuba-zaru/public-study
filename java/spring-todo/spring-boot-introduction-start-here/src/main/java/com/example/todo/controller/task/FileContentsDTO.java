package com.example.todo.controller.task;

import lombok.Data;

/**
 * ファイル内容DTO
 */
@Data
public class FileContentsDTO {

    /**
     * ファイル名
     */
    String fileName;

    /**
     * ファイルの内容
     * TODO: ファイルの内容はlistにすべきだが、実装の都合上Stringで実装している。
     */
    String contents;
}
