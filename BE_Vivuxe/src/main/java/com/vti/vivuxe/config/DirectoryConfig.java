package com.vti.vivuxe.config;

import com.vti.vivuxe.utils.PathUtil;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class DirectoryConfig {
	@Autowired
	private PathUtil pathUtil;

	private String relativePath;

	@PostConstruct
	public void init() throws IOException {
		// Initialize the relativePath with the path from PathUtil
		this.relativePath = pathUtil.getImagePath();
		try {
			createDirectoryIfNotExists(relativePath);
		} catch (Exception e) {
			throw new IOException("Failed to create directory: " + relativePath, e);
		}
	}

	private void createDirectoryIfNotExists(String relativePath){
		try{
			Path path = Paths.get(relativePath);
			if(!Files.exists(path)){
				Files.createDirectories(path);
				System.out.println("Directory created successfully.");
			}else{
				System.out.println("Directory already exists: " + relativePath);
			}

		}catch (Exception e){
			e.printStackTrace();
		}
	}
}
