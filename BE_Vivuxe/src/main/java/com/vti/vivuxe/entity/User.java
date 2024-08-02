package com.vti.vivuxe.entity;

import com.vti.vivuxe.enums.Gender;
import com.vti.vivuxe.enums.Role;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class User implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;

	@Column(unique = true)
	private String username;

	private String password;

	@Column(unique = true)
	private String email;

	private String phone;

	@Temporal(TemporalType.DATE)
	private Date dob;

	@Column(name = "driver_license", unique = true)
	private String driverLicense;

	private String address;

	@Column(name = "account_number")
	private String accountNumber;

	private String fullName;

	@Column(name = "bank_name")
	private String bankName;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_date")
	private Date createDate;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
	private List<Rental> rentals;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
	private List<Car> cars;

	@OneToOne(mappedBy = "user")
	private Image image;


	@PrePersist
	protected void onCreate() {
		if (this.createDate == null) {
			this.createDate = new Date();
		}

		if (this.role == null) {
			this.role = Role.USER;
		}

		if (this.gender == null) {
			this.gender = Gender.Unknown;
		}
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
