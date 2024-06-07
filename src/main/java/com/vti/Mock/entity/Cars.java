package com.vti.Mock.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.boot.model.internal.BinderHelper;
import org.hibernate.engine.internal.Cascade;

@Getter
@Setter
@Entity
@Table(name = "cars")
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cars_id")
    private long cars_id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private Users users;

    @Column(name = "make", length = 50, nullable = false)
    private String make;

    @Column(name = "modal", length = 1, nullable = false)
    private int modal;

    @Column(name = "year", length = 50, nullable = false)
    private int year;

    @Column(name = "license_plate", length = 20, nullable = false)
    private int license_plate;

    @Column(name = "transmission", nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Transmission transmission;
    public enum Transmission {
        MANUAL, AUTOMATIC
    }

    @Column(name = "fuel", nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Fuel fuel;
    public enum Fuel {
        GASOLINE, OIL
    }


    @Column(name = "seats", length = 10, nullable = false)
    private int seats;

    @Column(name = "nhien_lieu", length = 20, nullable = false)
    private int nhien_lieu;

    @Column(name = "nl_tieu_hao", length = 20, nullable = false)
    private int nl_tieu_hao;

    @Column(name = "bluetooth", nullable = false)
    private int bluetooth;

    @Column(name = "camera_360", nullable = false)
    private int camera_360;

    @Column(name = "camera_cap_le", nullable = false)
    private int camera_cap_le;

    @Column(name = "dashcam", nullable = false)
    private int dashcam;

    @Column(name = "rear_camera", nullable = false)
    private int rear_camera;

    @Column(name = "GPS_navigation", nullable = false)
    private int GPS_navigation;

    @Column(name = "child_seat", nullable = false)
    private int child_seat;

    @Column(name = "usb_port", nullable = false)
    private int usb_port;

    @Column(name = "spare_tire", nullable = false)
    private int spare_tire;

    @Column(name = "dvd_screen", nullable = false)
    private int dvd_screen;

    @Column(name = "ETC", nullable = false)
    private int ETC;

    @Column(name = "airbags", nullable = false)
    private int airbags;

}
