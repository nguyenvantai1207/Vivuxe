package com.vti.vivuxe.service.User;

import com.vti.vivuxe.dto.request.create.UserCreationRequest;
import com.vti.vivuxe.dto.request.update.UserUpdateRequest;
import com.vti.vivuxe.dto.response.UserDTO;
import com.vti.vivuxe.entity.Image;
import com.vti.vivuxe.entity.User;
import com.vti.vivuxe.enums.Gender;
import com.vti.vivuxe.enums.Role;
import com.vti.vivuxe.repository.ImageRepository;
import com.vti.vivuxe.repository.UserRepository;
import com.vti.vivuxe.service.File.FileService;
import com.vti.vivuxe.utils.PathUtil;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CustomUserDetailsService customUserDetailsService;

	@Autowired
	private ImageRepository imageRepository;

	@Autowired
	private PathUtil pathUtil;

	private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

	private String PATH;

	@PostConstruct
	public void init(){
		this.PATH = pathUtil.getImagePath();
	}

	public Page<UserDTO> getAllUsers(Pageable pageable) {
		Page<User> users = userRepository.findAll(pageable);

		Page<UserDTO> userDTOS = users.map(new Function<User, UserDTO>() {
			@Override
			public UserDTO apply(User entity) {
				UserDTO dto = new UserDTO(entity);
				return dto;
			}
		});

		return userDTOS;
	}

	public void createUser(UserCreationRequest request) throws IOException {
		Boolean existingUser = userRepository.existsByUsername(request.getUsername());

		if (existingUser) {
			throw new RuntimeException("Username is already existed!");
		}

		User user = modelMapper.map(request, User.class);
		userRepository.save(user);

	}

	public UserDTO getUserById(Long id) {
		Optional<User> optionalUser = userRepository.findById(id);

		if (optionalUser.isEmpty()) {
			throw new RuntimeException("User not found with id: " + id);
		}

		User existingUser = optionalUser.get();

		return modelMapper.map(existingUser, UserDTO.class);
	}

	public void updateUser(Long id, UserUpdateRequest request) throws IOException {
		User updateUser = userRepository.findById(id)
				.orElseThrow(() -> new NoSuchElementException("User not found with " + id));

		// Manually map non-null properties
		if (request.getEmail() != null) {
			updateUser.setEmail(request.getEmail());
		}
		if (request.getPassword() != null) {
			updateUser.setPassword(request.getPassword());
		}
		if (request.getPhone() != null) {
			updateUser.setPhone(request.getPhone());
		}
		if (request.getDob() != null) {
			try {
				Date dob = dateFormat.parse(request.getDob()); // Convert String to Date
				updateUser.setDob(dob);
			} catch (Exception e) {
				e.printStackTrace(); // Handle parsing exception
			}
		}
		if (request.getDriverLicense() != null) {
			updateUser.setDriverLicense(request.getDriverLicense());
		}
		if(request.getAccountNumber() != null){
			updateUser.setAccountNumber(request.getAccountNumber());
		}
		if(request.getFullName() != null){
			updateUser.setFullName(request.getFullName());
		}
		if(request.getBankName() != null){
			updateUser.setBankName(request.getBankName());
		}
		if (request.getAddress() != null) {
			updateUser.setAddress(request.getAddress());
		}
		if (request.getGender() != null) {
			updateUser.setGender(Gender.valueOf(request.getGender()));
		}
		if(request.getRole() != null){
			updateUser.setRole(Role.valueOf(request.getRole()));
		}

		userRepository.save(updateUser);

		if(request.getImage() != null){
			Image image = FileService.saveUserFile(PATH, request.getImage() , updateUser);
			imageRepository.save(image);
		}
	}

	public void deleteUser(Long id) {
		userRepository.findById(id)
				.orElseThrow(() -> {
					throw new NoSuchElementException("User not found with id: " + id);
				});

		User user = userRepository.findById(id).get();

		userRepository.delete(user);
	}

	@Override
	public UserDetailsService userDetailsService() {
		return customUserDetailsService;
	}

}
