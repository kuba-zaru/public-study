package com.example.its.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping
    public String index() {
        System.out.println("IndexController.index start...");
        return "index";
    }

    /**
     * ログイン画面を表示する
     *
     * @return ログイン画面
     */
    @GetMapping("/login")
    public String showLoginForm() {
        return "login";
    }
}
