package com.vti.vivuxe.dto.request.create;

import com.vti.vivuxe.entity.Rental;
import lombok.Data;

import java.util.Date;

@Data
public class RentalCreationRequest {
	//    private Long userId;
	private Long carId;
	private Date rentalDate;
	private Date rentalReturn;

	public Rental asRental() {
		Rental rental = new Rental();
		rental.setRentalDate(this.rentalDate);
		rental.setRentalReturn(this.rentalReturn);
		return rental;
	}
}
