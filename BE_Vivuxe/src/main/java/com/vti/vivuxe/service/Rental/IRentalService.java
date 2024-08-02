package com.vti.vivuxe.service.Rental;

import com.vti.vivuxe.dto.request.create.RentalCreationRequest;
import com.vti.vivuxe.dto.response.RentalDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IRentalService {
	void createRental(RentalCreationRequest request);

	Page<RentalDTO> getAllRentals(Pageable pageable);

	RentalDTO getRentalById(Long id);

	void updateRental(Long id, RentalCreationRequest request);

	void deleteRentalById(Long id);
}
