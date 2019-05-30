package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.RegistrationTechnologies;

@Repository
public interface RegistrationTechnologyRepository extends JpaRepository<RegistrationTechnologies, Long> {

}
