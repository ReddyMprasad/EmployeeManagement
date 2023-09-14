package org.jsp.EmployeeManagementSystem.controller;

import java.util.List;

import org.jsp.EmployeeManagementSystem.dto.Employee;
import org.jsp.EmployeeManagementSystem.dto.ResponseStructure;
import org.jsp.EmployeeManagementSystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*")
@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService service;
	
	 @PostMapping("/employees")
	    public ResponseEntity<ResponseStructure<Employee>> saveEmployee(@RequestBody Employee employee) {
	        return service.saveEmployee(employee);
	    }

	    @PutMapping("/employees")
	    public ResponseEntity<ResponseStructure<Employee>> updateEmployee(@RequestBody Employee employee) {
	        return service.updateEmployee(employee);
	    }

	    @GetMapping("/employees/{id}")
	    public ResponseEntity<ResponseStructure<Employee>> findEmployee(@PathVariable int id) {
	        return service.findEmployee(id);
	    }

	    @GetMapping("/employees")
	    public ResponseEntity<ResponseStructure<List<Employee>>> findAll() {
	        return service.findAll();
	    }

	    @DeleteMapping("/employees/{id}")
	    public ResponseEntity<ResponseStructure<String>> deleteUser(@PathVariable int id) {
	        return service.deleteEmployee(id);
	    }
	}


	
	
	


