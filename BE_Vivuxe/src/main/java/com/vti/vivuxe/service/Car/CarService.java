package com.vti.vivuxe.service.Car;

import com.vti.vivuxe.dto.request.create.CarCreationRequest;
import com.vti.vivuxe.dto.response.CarDTO;
import com.vti.vivuxe.dto.response.ImageDTO;
import com.vti.vivuxe.entity.Car;
import com.vti.vivuxe.entity.Image;
import com.vti.vivuxe.entity.User;
import com.vti.vivuxe.repository.CarRepository;
import com.vti.vivuxe.repository.ImageRepository;
import com.vti.vivuxe.repository.UserRepository;
import com.vti.vivuxe.service.File.FileService;
import com.vti.vivuxe.utils.PathUtil;
import jakarta.annotation.PostConstruct;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@NoArgsConstructor

public class CarService implements ICarService {
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private CarRepository carRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ImageRepository imageRepository;
	@Autowired
	private PathUtil pathUtil;
	@Autowired
	private FileService fileService;

	//	private final String PATH = "D:\\VTI Academy\\Mock_VTI\\ViVuXe\\src\\main\\resources\\static\\images\\";
	private String PATH;

	@PostConstruct
	public void init() {
		this.PATH = pathUtil.getImagePath();
	}

	public Page<CarDTO> getAllCars(Pageable pageable) {

		Page<Car> cars = carRepository.findAll(pageable);

		Page<CarDTO> carDTOS = cars.map(new Function<Car, CarDTO>() {
			@Override
			public CarDTO apply(Car entity) {
				CarDTO dto = new CarDTO(entity);
				return dto;
			}
		});
		return carDTOS;
	}

	public CarDTO getCarById(Long id) {
		Optional<Car> optionalCar = carRepository.findById(id);

		if (optionalCar.isEmpty()) {
			throw new RuntimeException("Car not found with id: " + id);
		}

		Car existingCar = optionalCar.get();

		CarDTO carDTO = modelMapper.map(existingCar, CarDTO.class);

		carDTO.setImageDTOS(existingCar.getImages().stream()
				.map(ImageDTO::new)
				.collect(Collectors.toList()));

		return carDTO;
	}

	public void createCar(CarCreationRequest request) throws IOException {
		Car car = modelMapper.map(request, Car.class);

		User u = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if (Objects.isNull(u))
			new RuntimeException("User not found");

//		Get user by id for setUser

		User user = userRepository.findById(u.getUserId())
				.orElseThrow(() -> new RuntimeException("User not found"));

		car.setUser(user);

		carRepository.save(car);

//		Xử lý ảnh
		List<Image> images = FileService.saveCarFiles(PATH, request.getImages(), car);

		imageRepository.saveAll(images);
	}

	public void updateCar(Long id, CarCreationRequest request) {
		Optional<Car> optionalCar = carRepository.findById(id);

		if (optionalCar.isEmpty()) {
			throw new NoSuchElementException("Car not found with id: " + id);
		} else {
			Car existingCar = optionalCar.get();

			modelMapper.map(request, existingCar);

			carRepository.save(existingCar);
		}
	}

	public void deleteCar(Long id) {
		carRepository.findById(id)
				.orElseThrow(() -> new NoSuchElementException("Car not found with id: " + id));

		Car car = carRepository.findById(id).get();
		carRepository.delete(car);
	}
}

