package com.aws_access;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * トップページのコントローラ
 */
@Controller
public class IndexController {

    /**
     * トップページを表示する
     *
     * @return トップページ
     */
    @GetMapping("/")
    public String index() {
        return "index";
    }
}
