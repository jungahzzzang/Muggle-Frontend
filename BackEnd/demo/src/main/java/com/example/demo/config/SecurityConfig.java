package com.example.demo.config;


import com.example.demo.security.jwt.JwtAccessDeniedHandler;
import com.example.demo.security.jwt.JwtAuthenticationEntryPoint;
import com.example.demo.security.jwt.JwtAuthenticationFilter;
import com.example.demo.security.oauth.CookieAuthorizationRequestRepository;
import com.example.demo.security.oauth.CustomOAuth2UserService;
import com.example.demo.security.oauth.OAuth2AuthenticationFailureHandler;
import com.example.demo.security.oauth.OAuth2AuthenticationSuccessHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
//spring security 설정 활성화
@EnableWebSecurity
@Log4j2
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    private final CustomOAuth2UserService customOAuth2UserService;
    private final CookieAuthorizationRequestRepository cookieAuthorizationRequestRepository;
    private final OAuth2AuthenticationSuccessHandler auth2AuthenticationSuccessHandler;
    private final OAuth2AuthenticationFailureHandler auth2AuthenticationFailureHandler;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/favicon.ico");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/oauth2/**", "/auth/**").permitAll()
                .antMatchers("/admin/**").hasRole("ADMIN");

        http.cors()
                .and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.formLogin().and()
                .oauth2Login()
                    .authorizationEndpoint()
                        .baseUri("/oauth2/authorize")
                        .authorizationRequestRepository(cookieAuthorizationRequestRepository)
                    .and()
                    .redirectionEndpoint()
                        .baseUri("/oauth2/callback/*")
                    .and()
                    .userInfoEndpoint()
                        .userService(customOAuth2UserService)
                .and()
                .successHandler(auth2AuthenticationSuccessHandler)
                .failureHandler(auth2AuthenticationFailureHandler);

        http.exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler);

        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
/*
    private final CustomOAuth2UserService customOAuth2UserService;
    private final OAuth2SuccessHandler successHandler;
    private final TokenService tokenService;

    @Bean
    public BCryptPasswordEncoder encodePWD() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public WebSecurityCustomizer configure(){
        return (web) -> web.ignoring().antMatchers(
                "/v3/api-docs/**",
                "swagger-ui/**",
                "/api/v1/login"
        );
    }

    @Bean
    public DefaultSecurityFilterChain filterChain(HttpSecurity http) throws Exception{
       return http
               .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
               .and()
               .csrf().disable().headers()
               .and()
               // authorizeRequests() : URL 별로 권한 관리를 설정하는 옵션
               // antMatchers('/url', ..) : 권한 관리 지정 옵션, URL과 HTTP 메소드별 관리, 해당 메소드 뒤의 체인은 열람 권한 설정
               .authorizeRequests().antMatchers("/", "/css/**","/images/**","/js/**")
               .permitAll()
                // '/api/아래 요청이 오면 인증이 필요하게 됨
                .antMatchers("/api/**").hasRole(Role.USER.name())
                .and()
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/api/home", true)
                .permitAll()
                .and()
               //로그아웃 기능 에 대한 설정
                .logout()
               //로그아웃 성공 시 / 주소로 이동
               .logoutSuccessUrl("/")
               .and()
               .addFilterBefore(new JwtAuthFilter(tokenService),
                       OAuth2LoginAuthenticationFilter.class)
               //oauth 로그인 기능에 대한 설정의 진입점
               .oauth2Login()
               .successHandler(successHandler)
               //oauth 로그인 성공 이후 사용자의 정보를 가져올 때 설저 담당
               .userInfoEndpoint()
               //소셜 로그인 성공 시 후속 조치
               //리소스 서버에서 사용자 정보를 가져온 상태로 추가기능 구현 시 사용
               .userService(customOAuth2UserService)
               .and()
               .and().build();
    }

}
 */
