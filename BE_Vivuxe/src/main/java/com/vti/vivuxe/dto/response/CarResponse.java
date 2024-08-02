package com.vti.vivuxe.dto.response;

import com.vti.vivuxe.entity.Car;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class CarResponse {
	private Long carId;
	private String licensePlate;
	private double cost;
	private Date createDate;
	private String address;
	private String make;
	private String model;
	private int seat;
	private int year;
	private String transmission;
	private String fuel;
	private Boolean bluetooth;
	private Boolean map;
	//	cảm biến lốp
	private Boolean tireSensor;
	//	cảm biến va chạm
	private Boolean collisionSensor;
	//	cảnh báo tốc độ
	private Boolean speedWarning;
	//	nắp thùng bán tải
	private Boolean truckCover;
	private Boolean camera360;
	private Boolean sideCamera;
	private Boolean dashCamera;
	private Boolean rearCamera;
	private Boolean gps;
	private Boolean childSeat;
	private Boolean usb;
	private Boolean spareTire;
	private Boolean dvdScreen;
	private Boolean etc;
	private Boolean airbags;
	private String status;
	private String description;
//	Lấy tên chủ xe
	private String ownerName;
//	Lấy tên số điện thoại chủ xe
	private String ownerPhone;
//	Lấy số tài khoản của chủ xe
	private String ownerAccountNumber;
//	Lấy tên ngân hàng của chủ xe
	private String ownerBankName;
//	Lấy list ảnh của xe
	private List<ImageDTO> imageDTOS;

	public CarResponse() {
	}

	public CarResponse(Car car) {
		this.carId = car.getCarId();
		this.make = car.getMake().name();
		this.model = car.getModel();
		this.seat = car.getSeat();
		this.year = car.getYear();
		this.address = car.getAddress();
		this.transmission = car.getTransmission().name();
		this.licensePlate = car.getLicensePlate();
		this.fuel = car.getFuel().name();
		this.bluetooth = car.getBluetooth();
		this.map = car.getMap();
		this.tireSensor = car.getTireSensor();
		this.collisionSensor = car.getCollisionSensor();
		this.speedWarning = car.getSpeedWarning();
		this.truckCover = car.getTruckCover();
		this.camera360 = car.getCamera360();
		this.cost = car.getCost();
		this.sideCamera = car.getSideCamera();
		this.dashCamera = car.getDashCamera();
		this.rearCamera = car.getRearCamera();
		this.gps = car.getGps();
		this.childSeat = car.getChildSeat();
		this.usb = car.getUsb();
		this.spareTire = car.getSpareTire();
		this.dvdScreen = car.getDvdScreen();
		this.etc = car.getEtc();
		this.airbags = car.getAirbags();
		this.description = car.getDescription();

		this.ownerName = car.getUser() != null ? car.getUser().getFullName() : null;

		this.ownerBankName = car.getUser() != null ? car.getUser().getBankName() : null;

		this.ownerAccountNumber = car.getUser() != null ? car.getUser().getAccountNumber() : null;

		this.ownerPhone = car.getUser() != null ? car.getUser().getPhone() : null;

		this.imageDTOS = car.getImages().stream().map(ImageDTO::new).collect(Collectors.toList());
	}

//	public void setOwnerName(String ownerName) {
//		this.ownerName = ownerName;
//	}
}
