package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Return all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Build create employee REST API
    // Save object to repository
    @PostMapping
    public Employee createEmployee(
            @RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // Build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(
            @PathVariable long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exists: " + id));

        return ResponseEntity.ok(employee);
    }

    // Update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable long id,
            @RequestBody Employee employeeDetails){
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exists: " + id));

        // Get variables
        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setHours(employeeDetails.getHours());
        updateEmployee.setEmailId(employeeDetails.getEmailId());
        updateEmployee.setProject(employeeDetails.getProject());

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }
}
