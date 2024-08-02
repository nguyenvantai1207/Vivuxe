package com.vti.vivuxe.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Data
@NoArgsConstructor
public class Rental {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rental_id")
	private Long rentalId;

	@Temporal(TemporalType.DATE)
	private Date rentalDate;

	@Temporal(TemporalType.DATE)
	private Date rentalReturn;

	@Column(name = "rental_cost")
	private double rentalCost;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", nullable = false, referencedColumnName = "user_id")
	private User user;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "car_id", nullable = false, referencedColumnName = "car_id")
	private Car car;

}
