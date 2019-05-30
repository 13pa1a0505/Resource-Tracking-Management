package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.TaskList;

/**
 * @author Kranthichandu
 *
 */
@Repository
public interface TaskListRepository extends JpaRepository<TaskList, Long> {

}
