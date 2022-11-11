package com.example.demo.security.oauth.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Map;

@Getter
@Setter
@ToString
public abstract class OAuth2UserInfo {

    protected Map<String, Object> attributes;
}
