package com.vti.vivuxe.service.User;

import com.vti.vivuxe.dto.request.create.UserCreationRequest;
import com.vti.vivuxe.dto.request.update.UserUpdateRequest;
import com.vti.vivuxe.dto.response.UserDTO;
import com.vti.vivuxe.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.io.IOException;


public interface IUserService {
	Page<UserDTO> getAllUsers(Pageable pageable);
	UserDTO getUserById(Long id);
	void createUser(UserCreationRequest request) throws IOException;
	void updateUser(Long id, UserUpdateRequest request) throws IOException;
	void deleteUser(Long id);
	UserDetailsService userDetailsService();
}
