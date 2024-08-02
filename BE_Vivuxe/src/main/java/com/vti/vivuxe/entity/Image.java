package com.vti.vivuxe.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Image {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "car_image_path")
	private String carImagePath;

	@Column(name = "user_image_path")
	private String userImagePath;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "car_id", referencedColumnName = "car_id")
	private Car car;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private User user;

	public Image(String carImagePath, Car car) {
		this.carImagePath = carImagePath;
		this.car = car;
	}

	public Image(String userImagePath, User user) {
		this.userImagePath = userImagePath;
		this.user = user;
	}
}
