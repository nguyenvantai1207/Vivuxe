package com.vti.Mock.service;

import com.vti.Mock.dto.UserDto;
import com.vti.Mock.request.UserCreateRequest;

public interface UserService {
    UserDto create(UserCreateRequest form);
}
