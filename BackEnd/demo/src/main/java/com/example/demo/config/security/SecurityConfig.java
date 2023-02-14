package com.example.demo.config.security;

import com.example.demo.oauth.entity.Role;
import com.example.demo.oauth.handler.OAuth2AuthenticationFailureHandler;
import com.example.demo.oauth.handler.OAuth2AuthenticationSuccessHandler;
import com.example.demo.oauth.service.CustomOAuth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.cors(cors -> cors.disable());
        http.authorizeRequests()
                .requestMatchers().permitAll()
                .antMatchers("/api/**").hasAnyAuthority("ROLE_USER")
                .antMatchers("/api/admin/**").hasAnyAuthority("ROLE_ADMIN")
                .anyRequest().authenticated()
//			  .antMatchers("/**").authenticated() // 인가된 사용자만 접근 가능하도록 설정
//			  .antMatchers("게시물등").hasRole(Role.USER.name()) // 특정 ROLE을 가진 사용자만 접근 가능하도록 설정
                .and()
                .logout()
                .logoutSuccessUrl("/")
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .userService(customOAuth2UserService)
                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler())
                .failureHandler(oAuth2AuthenticationFailureHandler());

        return http.build();
    }

    @Bean
    public OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler () {
        return new OAuth2AuthenticationSuccessHandler();
    }

    @Bean
    public OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler () {
        return new OAuth2AuthenticationFailureHandler();
    }
}