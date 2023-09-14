package org.jsp.EmployeeManagementSystem.repository;

import org.jsp.EmployeeManagementSystem.dto.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
