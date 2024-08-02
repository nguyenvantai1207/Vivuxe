package com.vti.vivuxe.dto.response;

import com.vti.vivuxe.entity.User;
import lombok.Data;

import java.util.Date;


@Data
public class UserResponse {
	private Long userId;
	private String username;
	private String email;
	private String phone;
	private Date dob;
	private String driverLicense;
	private String address;
	private String accountNumber;
	private String fullName;
	private String bankName;
	private Date createDate;
	private String gender;
	private String role;

	public UserResponse() {
	}

	public UserResponse(User user) {
		this.userId = user.getUserId();
		this.username = user.getUsername();
		this.email = user.getEmail();
		this.phone = user.getPhone();
		this.dob = user.getDob();
		this.driverLicense = user.getDriverLicense();
		this.bankName = user.getBankName();
		this.accountNumber = user.getAccountNumber();
		this.fullName = user.getFullName();
		this.address = user.getAddress();
		this.createDate = user.getCreateDate();
		this.gender = user.getGender().name();
		this.role = user.getRole().name();
	}
}