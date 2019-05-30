package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {

}
