package com.dunice.java.management.controller;

import com.dunice.java.management.dto.request.EmployeeRequest;
import com.dunice.java.management.dto.response.BaseResponse;
import com.dunice.java.management.dto.response.EmployeeResponse;
import com.dunice.java.management.service.EmployeeService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {

  private final EmployeeService service;

  @PostMapping("/create")
  public ResponseEntity<EmployeeResponse> createEmployee(@RequestBody EmployeeRequest request) {
    return new ResponseEntity<>(service.createNewEmployee(request), HttpStatus.OK);
  }

  @PostMapping("/update")
  public void updateEmployee(@RequestBody String request) {
    System.out.println(request);
  }

  @GetMapping("/find/{id}")
  public ResponseEntity<BaseResponse<EmployeeResponse>> find(@PathVariable @NonNull Long id) {
    return new ResponseEntity<>(new BaseResponse(List.of(service.findEmployeeById(id))), HttpStatus.OK);
  }

  @GetMapping("/find-all")
  public ResponseEntity<BaseResponse<List<EmployeeResponse>>> findAll() {
    List<EmployeeResponse> list = service.findAll();
    return new ResponseEntity<>(new BaseResponse(list), HttpStatus.OK);
  }

  @DeleteMapping("/delete/{id}")
  public void delete(@PathVariable @NonNull Long id) {
    service.deleteEmployee(id);
  }
}
