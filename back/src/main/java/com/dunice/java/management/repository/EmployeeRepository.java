package com.dunice.java.management.repository;

import com.dunice.java.management.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

  @Query(value = "select em from Employee em where em.corpEmail = :email")
  List<Employee> findByEmail(@Param("email") String email);
}
