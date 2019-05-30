package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.Groups;

/**
 * @author Kranthichandu
 *
 */
@Repository
public interface GroupsRepository extends JpaRepository<Groups, Long> {

}
