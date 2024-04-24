package com.manodya.lithan.KynApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.manodya.lithan.KynApi.configuration.AppProperties;


@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
//Enable AppPropterties Configuration class to use in TokenProvider Class
public class KynApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(KynApiApplication.class, args);
	}

}
