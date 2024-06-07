package com.vti.Mock.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int user_id;

    @Column(length = 50, nullable = false)
    private String username;

    @Column(name = "password", length = 50,nullable = false)
    private String password;

    @Column(name = "email",  length = 100,nullable = false)
    private String email;

    @Column(name = "phone",  length = 15,nullable = false)
    private String phone;


    @Column(name = "role", nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Role role;

    public enum Role {
        USER, OWNER, ADMIN
    }
}


