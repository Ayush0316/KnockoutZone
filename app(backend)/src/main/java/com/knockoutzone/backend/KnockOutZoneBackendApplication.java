package com.knockoutzone.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication
public class KnockOutZoneBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(KnockOutZoneBackendApplication.class, args);
	}

}
