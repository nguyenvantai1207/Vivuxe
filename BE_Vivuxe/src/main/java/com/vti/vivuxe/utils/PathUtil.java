package com.vti.vivuxe.utils;
import org.springframework.stereotype.Component;

@Component
public class PathUtil {
	private String imagePath = "D:\\VTI Academy\\Mock_VTI\\FE\\ViVuXe\\public\\images\\";

	public String getImagePath() {
		return imagePath;
	}
}