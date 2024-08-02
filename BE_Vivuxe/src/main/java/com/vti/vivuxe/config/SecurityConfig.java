package com.vti.vivuxe.config;

import com.vti.vivuxe.enums.Role;
import com.vti.vivuxe.service.User.CustomUserDetailsService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	@Autowired
	private JWTAuthenticationFilter jwtAuthenticationFilter;

	@Autowired
	private CustomUserDetailsService customUserDetailsService;


	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		try {
			http.csrf(AbstractHttpConfigurer::disable)
//					.exceptionHandling(i -> i.authenticationEntryPoint((request, response, ex) -> {
// 						if (Objects.equals("403", String.valueOf(response.getStatus()))) {
//							response.sendError(
//									HttpServletResponse.SC_FORBIDDEN, ex.getMessage()
//							);
//						} else if (Objects.equals("401", String.valueOf(response.getStatus()))) {
//							response.sendError(
//									HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage()
//							);
//						} else {
//							response.sendError(
//									response.getStatus(), ex.getMessage()
//							);
//						}
//					}))
					.authorizeRequests(authorizeRequests ->
							authorizeRequests
									.requestMatchers("api/v1/auth/**").permitAll()
									.requestMatchers("/api/v1/users/**").hasAnyAuthority(Role.ADMIN.name(), Role.USER.name())
									.requestMatchers("/images/**").permitAll()
									.requestMatchers("/api/v1/cars/getall").permitAll()  // Permit all requests specifically for getAllCars
									.requestMatchers("/api/v1/cars/**").hasAnyAuthority(Role.ADMIN.name(), Role.USER.name())  // Require specific roles for other car endpoints
									.requestMatchers("/api/v1/rentals/**").hasAnyAuthority(Role.ADMIN.name(), Role.USER.name())
									.anyRequest().authenticated()
					)
					.sessionManagement(manager -> manager
							.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
					.authenticationProvider(authenticationProvider())
					.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
			return http.build();
		} catch (Exception e) {
			// Handle or log the exception if needed
			throw new RuntimeException("Error configuring security filter chain", e);
		}
	}

	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(customUserDetailsService);
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		return authenticationProvider;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
			throws Exception {
		return config.getAuthenticationManager();
	}
}
