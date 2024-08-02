package com.vti.vivuxe.service.Car;

import com.vti.vivuxe.dto.request.create.CarCreationRequest;
import com.vti.vivuxe.dto.response.CarDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;

public interface ICarService {
	Page<CarDTO> getAllCars(Pageable pageable);

	void createCar(CarCreationRequest carCreationRequest) throws IOException;

	CarDTO getCarById(Long id);

	void updateCar(Long id, CarCreationRequest request);

	void deleteCar(Long id);
}
