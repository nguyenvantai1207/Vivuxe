package com.vti.vivuxe.service.File;

import com.vti.vivuxe.entity.Car;
import com.vti.vivuxe.entity.Image;
import com.vti.vivuxe.entity.User;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@NoArgsConstructor
public class FileService {

	public static Image saveUserFile(String PATH, MultipartFile file, User user) throws IOException {
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
		String headName = formatter.format(date);

		String fileName = headName + file.getOriginalFilename();

		String filePath = PATH + fileName;
		//luu file vao thu muc
		Files.copy(file.getInputStream(), Path.of(filePath));
		// luu doi image
		Image image = new Image(fileName, user);

		return image;
	}

	public static List<Image> saveCarFiles(String PATH, MultipartFile[] fileList, Car car) throws IOException {
		List<Image> images = new ArrayList<>();

		for (MultipartFile file : fileList) {
			// yyyyMMddHHmmss
			Date date = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
			String headName = formatter.format(date);

			String fileName = headName + file.getOriginalFilename();
			String filePath = PATH + fileName;

			Files.copy(file.getInputStream(), Path.of(filePath));

			Image image = new Image(fileName, car);
			images.add(image);
		}
		return images;
	}
}
