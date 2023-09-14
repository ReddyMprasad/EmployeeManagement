package org.jsp.EmployeeManagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.jsp.EmployeeManagementSystem.dao.EmployeeDao;
import org.jsp.EmployeeManagementSystem.dto.Employee;
import org.jsp.EmployeeManagementSystem.dto.ResponseStructure;
import org.jsp.EmployeeManagementSystem.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeDao dao;
	
	  public ResponseEntity<ResponseStructure<Employee>> saveEmployee(Employee employee) {
	        ResponseStructure<Employee> structure = new ResponseStructure<>();
	        structure.setMessage("Employee Registered Successfully");
	        structure.setBody(dao.saveEmployee(employee));
	        structure.setCode(HttpStatus.CREATED.value());
	        return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.CREATED);
	    }

	    public ResponseEntity<ResponseStructure<Employee>> updateEmployee(Employee employee) {
	        ResponseStructure<Employee> structure = new ResponseStructure<>();
	        structure.setMessage("Employee Updated Successfully");
	        structure.setBody(dao.updateEmployee(employee));
	        structure.setCode(HttpStatus.ACCEPTED.value());
	        return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.ACCEPTED);
	    }

	    public ResponseEntity<ResponseStructure<Employee>> findEmployee(int id) {
	        Optional<Employee> recEmployee = dao.findById(id);
	        if (recEmployee.isPresent()) {
	            ResponseStructure<Employee> structure = new ResponseStructure<>();
	            structure.setMessage("Employee Found");
	            structure.setBody(recEmployee.get());
	            structure.setCode(HttpStatus.OK.value());
	            return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.OK);
	        }
	        throw new IdNotFoundException();
	    }

	    public ResponseEntity<ResponseStructure<List<Employee>>> findAll() {
	        ResponseStructure<List<Employee>> structure = new ResponseStructure<>();
	        structure.setBody(dao.findAll());
	        structure.setMessage("All Employees are Found");
	        structure.setCode(HttpStatus.OK.value());
	        return new ResponseEntity<ResponseStructure<List<Employee>>>(structure, HttpStatus.OK);
	    }

	    public ResponseEntity<ResponseStructure<String>> deleteEmployee(int id) {
	        Optional<Employee> recEmployee = dao.findById(id);
	        ResponseStructure<String> structure = new ResponseStructure<>();
	        if (recEmployee.isPresent()) {
	            structure.setMessage("Employee Found");
	            structure.setBody("Employee Deleted");
	            structure.setCode(HttpStatus.OK.value());
	            dao.deleteById(id);
	            return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
	        } else {
	            structure.setBody("Employee Not Deleted");
	            structure.setMessage("Employee Not Found");
	            structure.setCode(HttpStatus.NOT_FOUND.value());
	        }
	        return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
	    }
	}


	
	
	


