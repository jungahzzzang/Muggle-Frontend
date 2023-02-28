package com.example.demo.oauth.entity;
import com.example.demo.api.entity.user.User;
import lombok.Getter;

@Getter
public class SessionUser {

    private String name;
    private String email;

    public SessionUser(User user){
        this.name = user.getName();
        this.email = user.getEmail();
    }
}