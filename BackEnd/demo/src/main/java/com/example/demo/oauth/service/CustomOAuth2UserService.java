package com.example.demo.oauth.service;

import java.nio.file.attribute.UserPrincipal;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import com.example.demo.OAuthAttributes;
import com.example.demo.api.entity.user.User;
import com.example.demo.api.repository.user.UserRepository;
import com.example.demo.oauth.entity.ProviderType;
import com.example.demo.oauth.entity.Role;
import com.example.demo.oauth.info.OAuth2UserInfo;
import com.example.demo.oauth.info.OAuth2UserInfoFactory;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;


import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService{

    private final UserRepository userRepository;
    private final HttpSession httpSession;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User _user = super.loadUser(userRequest);

        try{
            ProviderType providerType = ProviderType.valueOf(userRequest.getClientRegistration().getRegistrationId().toUpperCase());

            OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(providerType, _user.getAttributes());

            User user = createUser(userInfo, providerType);

            return new DefaultOAuth2User(Collections.singleton(new SimpleGrantedAuthority(user.getRole().getKey())),
                    userInfo.getAttributes(),
                    "id");
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }

        //httpSession.setAttribute("user", new SessionUser(user));

    }

    private User createUser(OAuth2UserInfo userInfo, ProviderType providerType) {
        LocalDateTime now = LocalDateTime.now();
        User user = User.builder().name(userInfo.getName()).email(userInfo.getEmail()).role(Role.USER).providerType(providerType).build();
        return userRepository.save(user);
    }


    private User saveOrUpdate(OAuthAttributes attributes){
        User user =  userRepository.findOneByEmail(attributes.getEmail())
                .map(entity -> entity.update(attributes.getName()))
                .orElse(attributes.toEntity());

        return userRepository.save(user);
    }

}