package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.TempUsers;

/**
 * @author Kranthichandu
 *
 */
@Repository
public interface TempUsersRepository extends JpaRepository<TempUsers, Long> {

}
