package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.Employer;
import net.javaguides.springboot.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employer")
@CrossOrigin("*")
public class EmployerController {

    @Autowired
    private EmployerRepository employerRepository;

    @GetMapping
    public List<Employer> getAllEmployees() {
        return employerRepository.findAll();
    }

    @PostMapping
    public Employer createEmployee(
            @RequestBody Employer employer){
        return employerRepository.save(employer);
    }

    @GetMapping("{id}")
    public ResponseEntity<Employer> getEmployeeById(
            @PathVariable long id) {
        Employer employer = employerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer does not exists: " + id));

        return ResponseEntity.ok(employer);
    }

    @PutMapping("{id}")
    public ResponseEntity<Employer> updateEmployee(
            @PathVariable long id,
            @RequestBody Employer employeeDetails){
        Employer updateEmployer = employerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer does not exists: " + id));

        // Get variables
        updateEmployer.setName(employeeDetails.getName());

        employerRepository.save(updateEmployer);

        return ResponseEntity.ok(updateEmployer);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Employer> deleteEmployee(
            @PathVariable long id
    ) {
        Employer employer = employerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer not exists: " + id));

        employerRepository.delete(employer);

        // Delete
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
