package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerRepository extends JpaRepository<Employer, Long> {
}
