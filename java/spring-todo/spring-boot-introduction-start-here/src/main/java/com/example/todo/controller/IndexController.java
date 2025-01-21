package com.example.todo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * IndexController
 */
@Controller
public class IndexController {

    /**
     * indexを表示する
     *
     * @return
     */
    @GetMapping("/")
    public String index() {

        return "index";
    }
}
