package com.vti.vivuxe.dto.response;

import com.vti.vivuxe.entity.Rental;
import lombok.Data;

import java.util.Date;

@Data
public class RentalDTO {
	private Long rentalId;
	private Date rentalDate;
	private Date rentalReturn;
	private double rentalCost;
	private String status;
	private UserResponse userResponse;
	private CarResponse carResponse;

	public RentalDTO() {
	}

	//    Tạo constructor để xuất ra giá trị
	public RentalDTO(Rental rental) {
		this.rentalId = rental.getRentalId();
		this.rentalDate = rental.getRentalDate();
		this.rentalReturn = rental.getRentalReturn();
		this.rentalCost = rental.getRentalCost();
		this.userResponse = new UserResponse(rental.getUser());
		this.carResponse = new CarResponse(rental.getCar());
	}
}
