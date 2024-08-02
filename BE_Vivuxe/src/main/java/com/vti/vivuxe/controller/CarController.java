package com.vti.vivuxe.controller;

import com.vti.vivuxe.dto.request.create.CarCreationRequest;
import com.vti.vivuxe.dto.response.CarDTO;
import com.vti.vivuxe.service.Car.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("api/v1/cars")
@CrossOrigin("*")
public class CarController {

	@Autowired
	private ICarService carService;

	@GetMapping("/getall")
	public Page<CarDTO> getAllCars(Pageable pageable) {
		return carService.getAllCars(pageable);
	}

	@PostMapping()
	public ResponseEntity<?> createCar(CarCreationRequest request) throws IOException {
		carService.createCar(request);
		return new ResponseEntity<>("Car Created Successfully!", HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public CarDTO getCarById(@PathVariable Long id) {
		return carService.getCarById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateCar(@PathVariable Long id, @RequestBody CarCreationRequest request) {
		carService.updateCar(id, request);
		return ResponseEntity.ok("Car updated Successfully!");
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteCar(@PathVariable Long id) {
		carService.deleteCar(id);
		return ResponseEntity.ok("Car deleted Successfully!");
	}
}
