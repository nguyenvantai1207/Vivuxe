package com.vti.vivuxe.controller;

import com.vti.vivuxe.dto.request.create.UserCreationRequest;
import com.vti.vivuxe.dto.request.update.UserUpdateRequest;
import com.vti.vivuxe.service.User.IUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
@RequestMapping("api/v1/users")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private IUserService userService;

	@GetMapping()
	public ResponseEntity<?> getAllUsers(Pageable pageable) {
		return ResponseEntity.ok(userService.getAllUsers(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Long id) {
		return ResponseEntity.ok(userService.getUserById(id));
	}

	@PostMapping()
	public ResponseEntity<?> createUser(@RequestBody @Valid UserCreationRequest request) throws IOException {
		userService.createUser(request);
		return new ResponseEntity<>("User Created Successfully!", HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable long id, @Valid UserUpdateRequest request) throws IOException {
		userService.updateUser(id, request);
		return new ResponseEntity<>("User Updated Successfully!", HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Long id) {
		userService.deleteUser(id);
		return new ResponseEntity<>("User deleted successfully!", HttpStatus.OK);
	}
}
