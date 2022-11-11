package com.example.demo.entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
//JPA Entity 클래스 들이 BaseTimeEntity를 상속할 경우 필드들도 컬럼으로 인식
@MappedSuperclass
//audting 기능을 포함
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity {

    //컬럼 생성시 자동 저장
    @CreatedDate
    private LocalDateTime createdDate;

    //컬럼 수정 시 자동 저장
    @LastModifiedDate
    private LocalDateTime modifiedDate;
}
