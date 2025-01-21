package com.example.todo.controller.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * HelloController
 */
@Controller
public class HelloController {

    @GetMapping(value = "/hello")
    public String hello() {

        return "hello/hello";
    }
}
