package com.aws_access.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    /**
     * ハローワールド画面を表示する
     *
     * @return
     */
    @GetMapping("/hello")
    public String hello() {
        return "hello/hello";
    }
}
