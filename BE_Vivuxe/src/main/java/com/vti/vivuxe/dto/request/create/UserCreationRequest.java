package com.vti.vivuxe.dto.request.create;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;


@Data
public class UserCreationRequest {
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

	private Date dob;

	@NotNull(message = "Driver License cannot be null")
	@Size(min = 5, max = 15, message = "Driver License must be between 5 and 15 characters")
	private String driverLicense;

	private String accountNumber;

	private String fullName;

	private String bankName;

	private String address;

	private String gender;

	private String role;

}
