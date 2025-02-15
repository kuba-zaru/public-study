package com.example.its.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Spring Securityの設定クラス
 */
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * 認証設定
     *
     * @param http HttpSecurity
     * @throws Exception 例外
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                // ログイン画面は全ユーザに許可
                .mvcMatchers("/login/**").permitAll()
                // それ以外は認証が必要
                .anyRequest().authenticated()
                // 自作のログイン画面のURLを指定
                .and().formLogin().loginPage("/login");
    }
}
