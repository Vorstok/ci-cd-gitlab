package com.dunice.java.management.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.jetbrains.annotations.NotNull;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class EmployeeRequest {
  private Long id;
  @NotNull
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
  private Boolean isFired = false;
}
