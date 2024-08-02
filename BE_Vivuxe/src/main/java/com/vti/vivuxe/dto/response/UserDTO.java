package com.vti.vivuxe.dto.response;

import com.vti.vivuxe.entity.Car;
import com.vti.vivuxe.entity.User;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class UserDTO {
	private Long userId;
	private String username;
	private String email;
	private String phone;
	private Date dob;
	private String driverLicense;
	private String accountNumber;
	private String fullName;
	private String bankName;
	private String address;
	private Date createDate;
	private String gender;
	private String role;
	//	private List<RentalDTO> rentals;
	private List<CarDTO> cars;
	private ImageDTO imageDTO;


	public UserDTO() {
	}

	//    Tạo constructor để xuất ra giá trị
	public UserDTO(User user) {
		this.userId = user.getUserId();
		this.username = user.getUsername();
		this.email = user.getEmail();
		this.phone = user.getPhone();
		this.dob = user.getDob();
		this.driverLicense = user.getDriverLicense();
		this.accountNumber = user.getAccountNumber();
		this.bankName = user.getBankName();
		this.fullName = user.getFullName();
		this.address = user.getAddress();
		this.createDate = user.getCreateDate();
		this.gender = user.getGender().name();
		this.role = user.getRole().name();


		if (user.getImage() != null) {
			this.imageDTO = new ImageDTO(user.getImage());
		}


////        Tạo 1 list rental DTOS rỗng
//		List<RentalDTO> rentalDTOS = new ArrayList<>();
////        Lấy từng rental trong list Rentals
//		for (Rental rental : user.getRentals()) {
//			rentalDTOS.add(new RentalDTO(rental));
//		}
//		this.rentals = rentalDTOS;


		List<CarDTO> carDTOS = new ArrayList<>();
		for (Car car : user.getCars()) {
			carDTOS.add(new CarDTO(car));
		}
		this.cars = carDTOS;
	}
}
