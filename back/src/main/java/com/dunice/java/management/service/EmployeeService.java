package com.dunice.java.management.service;

import com.dunice.java.management.dto.request.EmployeeRequest;
import com.dunice.java.management.dto.response.EmployeeResponse;

import java.util.List;

public interface EmployeeService {

  EmployeeResponse createNewEmployee(EmployeeRequest request);
  EmployeeResponse findEmployeeById(Long id);
  EmployeeResponse updateEmployee(EmployeeRequest request);
  List<EmployeeResponse> findAll();
  void deleteEmployee(Long id);
}
