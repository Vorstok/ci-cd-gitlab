package com.dunice.java.management.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "employees", schema = "management")
public class Employee {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "patronymic")
  private String patronymic;

  @Column(name = "incoming_date")
  private LocalDate incomingDate;

  @Column(name = "birth_date")
  private LocalDate birthDate;

  @Column(name = "english")
  private String english;

  @Column(name = "education")
  private String education;

  @Column(name = "personal_email")
  private String personalEmail;

  @Column(name = "corpEmail")
  private String corpEmail;

  @Column(name = "phone")
  private String phone;

  @Column(name = "tg")
  private String tg;

  @Column(name = "is_fired")
  private Boolean isFired = false;
}
