package com.resourcetrackingmgmt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author Kranthichandu
 *
 */
@SpringBootApplication
public class ResourceTrackingManagementApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ResourceTrackingManagementApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ResourceTrackingManagementApplication.class, args);
	}

}
