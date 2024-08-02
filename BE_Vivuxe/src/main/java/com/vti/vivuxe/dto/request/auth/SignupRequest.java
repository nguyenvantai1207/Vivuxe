package com.vti.vivuxe.dto.request.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignupRequest {
	@NotNull(message = "Username cannot be null")
	@Size(min = 5, max = 20, message = "Username must be between 5 and 20 characters")
	private String username;

	@NotNull(message = "Password cannot be null")
	@Size(min = 5, max = 20, message = "Password must be between 5 and 20 characters")
	private String password;

	@Email(message = "invalid email")
	private String email;

	@NotNull(message = "Phone number cannot be null")
	@Size(min = 10, max = 11, message = "Phone number must be between 10 and 20 numbers")
	private String phone;
}
