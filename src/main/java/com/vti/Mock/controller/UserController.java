package com.vti.Mock.controller;

import com.vti.Mock.dto.UserDto;
import com.vti.Mock.request.UserCreateRequest;
import com.vti.Mock.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/api/v1/users")
    public UserDto create( @RequestBody @Valid UserCreateRequest form) {
        return  userService.create(form);
    }
}
