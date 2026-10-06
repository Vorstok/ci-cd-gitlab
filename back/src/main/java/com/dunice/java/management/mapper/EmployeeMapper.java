package com.dunice.java.management.mapper;

import com.dunice.java.management.dto.request.EmployeeRequest;
import com.dunice.java.management.dto.response.EmployeeResponse;
import com.dunice.java.management.entity.Employee;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface EmployeeMapper {

  EmployeeResponse toDto(Employee employee);

  @Mapping(source = "isFired", target = "isFired", defaultValue = "false")
  Employee toEntity(EmployeeRequest request);

  @Mapping(target = "id", source = "id", ignore = true)
  Employee update(@MappingTarget Employee employee, EmployeeRequest request);
}
