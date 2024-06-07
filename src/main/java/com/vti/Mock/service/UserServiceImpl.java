package com.vti.Mock.service;

import com.vti.Mock.dto.UserDto;
import com.vti.Mock.request.UserCreateRequest;
import com.vti.Mock.repository.UserRepository;
import lombok.AllArgsConstructor;
import mapper.UserMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public UserDto create(UserCreateRequest form) {
        return null;
    }
}
