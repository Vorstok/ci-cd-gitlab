package com.dunice.java.management.dto.response;

import lombok.Data;
import java.time.LocalDate;

@Data
public class EmployeeResponse {
  private Long id;
  private String firstName;
  private String lastName;
  private String patronymic;
  private LocalDate incomingDate;
  private LocalDate birthDate;
  private String english;
  private String education;
  private String personalEmail;
  private String corpEmail;
  private String phone;
  private String tg;
  private Boolean isFired;
}
