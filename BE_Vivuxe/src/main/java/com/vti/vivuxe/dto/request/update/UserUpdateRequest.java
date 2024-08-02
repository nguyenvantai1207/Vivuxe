package com.vti.vivuxe.dto.request.update;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
public class UserUpdateRequest {
//	@Size(min = 5, max = 20, message = "Username must be between 5 and 20 characters")
//	private String username;

	@Size(min = 5, max = 20, message = "Password must be between 5 and 20 characters")
	private String password;

	@Email(message = "invalid email")
	private String email;

	@Size(min = 10, max = 11, message = "Phone number must be between 10 and 20 numbers")
	private String phone;

	private String dob;

	@Size(min = 5, max = 15, message = "Driver License must be between 5 and 15 characters")
	private String driverLicense;

	private String accountNumber;

	private String fullName;

	private String bankName;

	private String address;

	private String gender;

	private String role;

	private MultipartFile image;
}
