package com.aws_access;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AwsAccessApplication {

	public static void main(String[] args) {
		SpringApplication.run(AwsAccessApplication.class, args);
		System.out.println("AWS Resource Access Sample へようこそ。");
	}
}
