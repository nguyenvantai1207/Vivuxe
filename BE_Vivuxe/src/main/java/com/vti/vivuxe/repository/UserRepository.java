package com.vti.vivuxe.repository;

import com.vti.vivuxe.entity.User;
import com.vti.vivuxe.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	boolean existsByUsername(String username);

	Optional<User> findByUsername(String username);

	User findByRole(Role role);
}
