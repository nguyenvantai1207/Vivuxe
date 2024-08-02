package com.vti.vivuxe.controller;

import com.vti.vivuxe.dto.request.auth.SigninRequest;
import com.vti.vivuxe.dto.request.auth.SignupRequest;
import com.vti.vivuxe.entity.User;
import com.vti.vivuxe.service.Authentication.IAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthenticationController {
	@Autowired
	private IAuthenticationService authenticationService;

	@PostMapping("/signup")
	public ResponseEntity<User> signup(@RequestBody SignupRequest request) {
		return ResponseEntity.ok(authenticationService.signup(request));
	}

	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody SigninRequest request) {
		return ResponseEntity.ok(authenticationService.signin(request));
	}
}
