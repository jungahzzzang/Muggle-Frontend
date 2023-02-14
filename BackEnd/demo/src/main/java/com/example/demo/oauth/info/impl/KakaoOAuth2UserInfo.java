package com.example.demo.oauth.info.impl;

import com.example.demo.oauth.info.OAuth2UserInfo;

import java.util.Map;

public class KakaoOAuth2UserInfo extends OAuth2UserInfo {
    public KakaoOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return String.valueOf(attributes.get("id"));
    }

    @Override
    public String getName() {
        Map<String, Object> propertiesObj = (Map<String, Object>) attributes.get("properties");
        return (String) propertiesObj.get("nickname");
    }

    @Override
    public String getEmail() {
        Map<String, Object> kakaoacountObj = (Map<String, Object>) attributes.get("kakao_account");

        return (String) kakaoacountObj.get("email");
    }

    @Override
    public String getImageUrl() {
        Map<String, Object> propertiesObj = (Map<String, Object>) attributes.get("properties");
        return (String) propertiesObj.get("profile_image");
    }
}
