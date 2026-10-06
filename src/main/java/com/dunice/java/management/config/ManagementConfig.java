package com.dunice.java.management.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ManagementConfig {

  @Bean
  public RestTemplate getTemplate() {
    return new RestTemplate();
  }
}
