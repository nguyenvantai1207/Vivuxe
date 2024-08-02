package com.vti.vivuxe.entity;

import com.vti.vivuxe.enums.Fuel;
import com.vti.vivuxe.enums.Make;
import com.vti.vivuxe.enums.Transmission;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "car_id")
	private Long carId;

	@Column(name = "license_plate", unique = true, nullable = false)
	private String licensePlate;

	private double cost = 0.0;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_date")
	private Date createDate;

	private String address;

	private Make make;

	private String model;

	private int seat;

	private int year;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Transmission transmission;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Fuel fuel;

	private Boolean bluetooth;
	//	Bản đồ
	private Boolean map;
	//	cảm biến lốp
	@Column(name = "tire_sensor")
	private Boolean tireSensor;
	//	cảm biến va chạm
	@Column(name = "collision_sensor")
	private Boolean collisionSensor;
	//	cảnh báo tốc độ
	@Column(name = "speed_warning")
	private Boolean speedWarning;
	//	nắp thùng bán tải
	@Column(name = "truck_cover")
	private Boolean truckCover;

	@Column(name = "camera_360")
	private Boolean camera360;

	@Column(name = "side_camera")
	private Boolean sideCamera;

	@Column(name = "dash_camera")
	private Boolean dashCamera;

	@Column(name = "rear_camera")
	private Boolean rearCamera;

	private Boolean gps;

	@Column(name = "child_seat")
	private Boolean childSeat;

	private Boolean usb;

	@Column(name = "spare_tire")
	private Boolean spareTire;

	@Column(name = "dvd_screen")
	private Boolean dvdScreen;

	private Boolean etc;

	private Boolean airbags;

	private String description;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "car", cascade = CascadeType.ALL)
	private List<Rental> rentals;

	@ManyToOne()
	@JoinColumn(name = "user_id", nullable = false, referencedColumnName = "user_id")
	private User user;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "car", cascade = CascadeType.ALL)
	private List<Image> Images;

	@PrePersist
	protected void onCreate() {
		if (this.createDate == null) {
			this.createDate = new Date();
		}
	}
}
