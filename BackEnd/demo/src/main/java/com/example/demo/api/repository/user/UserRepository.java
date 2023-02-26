package com.example.demo.api.repository.user;

import java.util.Optional;

import javax.persistence.EntityManager;

import com.example.demo.api.entity.user.User;
import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final EntityManager em;

    public Optional<User> findOneByEmail(String email){
        return em.createQuery("select u from User u where u.email = :email", User.class)
                .setParameter("email", email)
                .getResultList()
                .stream().findAny();
    }

    public User save(User user) {
        if(user.getId() == null) {
            user.setProfile_yn("N");
            em.persist(user);
        } else {
            em.merge(user);
        }
        return user;
    }

}