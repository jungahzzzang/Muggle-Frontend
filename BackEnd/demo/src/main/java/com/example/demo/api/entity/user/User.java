package com.example.demo.api.entity.user;

import com.example.demo.oauth.entity.ProviderType;
import com.example.demo.oauth.entity.Role;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@RequiredArgsConstructor
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(nullable = false)
    private String profile_yn;

    @Column(nullable = false)
    private ProviderType providerType;

    @Builder
    public User(String name, String email, String picture, Role role, ProviderType providerType){
        this.name = name;
        this.email = email;
        this.role = role;
        this.providerType = providerType;
    }

    public User update(String name){
        this.name = name;
        return this;
    }
}