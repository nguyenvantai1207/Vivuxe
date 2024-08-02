package com.vti.vivuxe.dto.response;

import com.vti.vivuxe.entity.Image;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ImageDTO {
	private Long id;
	private String carImagePath;//duong link den cho luuu anh
	private String userImagePath;

	public ImageDTO(Image image) {
		this.id = image.getId();
		this.carImagePath = image.getCarImagePath();
		this.userImagePath = image.getUserImagePath();
	}
}
