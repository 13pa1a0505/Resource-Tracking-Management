package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.Technologies;

/**
 * @author Kranthichandu
 *
 */
@Repository
public interface TechnologiesRepository extends JpaRepository<Technologies, Long> {

}
