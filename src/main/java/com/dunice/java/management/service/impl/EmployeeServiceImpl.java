package com.dunice.java.management.service.impl;

import com.dunice.java.management.dto.request.EmployeeRequest;
import com.dunice.java.management.dto.response.EmployeeResponse;
import com.dunice.java.management.entity.Employee;
import com.dunice.java.management.exceptions.ManagementException;
import com.dunice.java.management.mapper.EmployeeMapper;
import com.dunice.java.management.mapper.EmployeeMapperImpl;
import com.dunice.java.management.repository.EmployeeRepository;
import com.dunice.java.management.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

import static com.dunice.java.management.constants.ErrorsConstants.ENTITY_ALREADY_EXISTS_EXCEPTION;
import static com.dunice.java.management.constants.ErrorsConstants.ENTITY_NOT_FOUND_EXCEPTION;
import static com.dunice.java.management.constants.ErrorsConstants.JSON_PARSING_EXCEPTION;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

  private final EmployeeRepository repository;
  private final EmployeeMapper mapper = new EmployeeMapperImpl();

  @Override
  @Transactional
  public EmployeeResponse createNewEmployee(EmployeeRequest request) {
    if (request.getCorpEmail() != null) {
      if(!repository.findByEmail(request.getCorpEmail()).isEmpty())
        throw new ManagementException(ENTITY_ALREADY_EXISTS_EXCEPTION);
      else {
        return mapper.toDto(repository.save(mapper.toEntity(request)));
      }
    } else throw new ManagementException(JSON_PARSING_EXCEPTION);
  }

  @Override
  public EmployeeResponse findEmployeeById(Long id) {
    return mapper.toDto(findById(id));
  }

  @Override
  @Transactional
  public EmployeeResponse updateEmployee(EmployeeRequest request) {
    if (request.getId() != null) {
      Employee employee = findById(request.getId());
      return mapper.toDto(mapper.update(employee, request));
    } else throw new ManagementException(JSON_PARSING_EXCEPTION);
  }

  @Override
  public List<EmployeeResponse> findAll() {
    return repository
      .findAll()
      .stream()
      .map(mapper::toDto).toList();
  }

  @Override
  public void deleteEmployee(Long id) {
    repository.deleteById(id);
  }

  private Employee findById(Long id) {
    return repository.findById(id).orElseThrow(
      () -> new ManagementException(ENTITY_NOT_FOUND_EXCEPTION));
  }
}
