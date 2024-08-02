package com.vti.vivuxe.dto.response;
import com.vti.vivuxe.entity.Car;
import com.vti.vivuxe.entity.Rental;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class CarDTO {
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
//    private UserResponse userResponse;
//    private List<RentalDTO> rentals;
    private List<ImageDTO> imageDTOS;


    public CarDTO() {
    }

    public CarDTO(Car car) {
        this.carId = car.getCarId();
        this.licensePlate = car.getLicensePlate();
        this.cost = car.getCost();
        this.createDate = car.getCreateDate();
        this.address = car.getAddress();
        this.make = car.getMake().name();
        this.model = car.getModel();
        this.seat = car.getSeat();
        this.year = car.getYear();
        this.transmission = car.getTransmission().name();
        this.fuel = car.getFuel().name();
        this.bluetooth = car.getBluetooth();
        this.map = car.getMap();
        this.tireSensor = car.getTireSensor();
        this.collisionSensor = car.getCollisionSensor();
        this.speedWarning = car.getSpeedWarning();
        this.truckCover = car.getTruckCover();
        this.camera360 = car.getCamera360();
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
//        this.userResponse = new UserResponse(car.getUser());

//        List<RentalDTO> rentalDTOS = new ArrayList<>();

//        for(Rental rental : car.getRentals()){
//            rentalDTOS.add(new RentalDTO(rental));
//        }
//        this.rentals = rentalDTOS;
        this.imageDTOS = car.getImages().stream().map(ImageDTO::new).collect(Collectors.toList());

    }
}
