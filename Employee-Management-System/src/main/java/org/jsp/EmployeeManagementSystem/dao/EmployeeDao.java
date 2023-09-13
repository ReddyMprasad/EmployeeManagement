package org.jsp.EmployeeManagementSystem.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.EmployeeManagementSystem.dto.Employee;
import org.jsp.EmployeeManagementSystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeDao {
	@Autowired
	private EmployeeRepository repository;
	
	public Employee saveEmployee(Employee e) {
		return repository.save(e);
	}
	public Employee updateEmployee(Employee e) {
		return repository.save(e);
	}
	public List<Employee> findAll(){
		return repository.findAll();
	}
	
	public Optional<Employee> findById(int id){
		return repository.findById(id);
	}
	
	public void deleteById(int id) {
		repository.deleteById(id);
	}

}
