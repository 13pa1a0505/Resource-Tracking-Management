package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.Roles;

/**
 * @author Kranthichandu
 *
 */
@Repository
public interface RoleRepository extends JpaRepository<Roles, Long> {

}
