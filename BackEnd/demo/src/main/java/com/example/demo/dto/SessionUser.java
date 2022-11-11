package com.example.demo.dto;

import com.example.demo.entity.User;
import lombok.Getter;

import java.io.Serializable;

//Entity User 클래스를 Session User로 사용하지 않는 이유
// 세션에 저장하기 위해서는 User클래스를 세션에 저장하니 User 클래스에 직렬화 구현이 안되었다는 오류가 남
// Entity 클래스는 직렬화 코드를 넣지 않는게 좋음
// Entity 클래스에는 언제 다른 Entity와 관계가 형성될지 모름
// @onetomany, @manytomany등 자식 엔티티를 가지고 있다면 직렬화 대상에 자식들까지 포함되어 성능이슈, 부수효과 발생
// 따라서 직렬화 기능을 가진 세션 dto를 추가하는 것이 효과적
@Getter
public class SessionUser implements Serializable {
    private String name;
    private String email;
    private String picture;

    public SessionUser(User user){
        this.name = user.getName();
        this.email = user.getEmail();
        this.picture = user.getEmail();
    }
}
