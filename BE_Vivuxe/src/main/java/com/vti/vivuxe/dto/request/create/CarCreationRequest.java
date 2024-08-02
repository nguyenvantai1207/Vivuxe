package com.vti.vivuxe.dto.request.create;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CarCreationRequest {
    private String licensePlate;
    private double cost;
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

    private MultipartFile[] images;
//    private Long userId;
}


