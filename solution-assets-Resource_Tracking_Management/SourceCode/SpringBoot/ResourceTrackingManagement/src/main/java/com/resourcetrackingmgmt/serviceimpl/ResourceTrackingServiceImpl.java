package com.resourcetrackingmgmt.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.resourcetrackingmgmt.model.Groups;
import com.resourcetrackingmgmt.model.Requests;
import com.resourcetrackingmgmt.model.TaskList;
import com.resourcetrackingmgmt.model.TempUsers;
import com.resourcetrackingmgmt.repository.GroupsRepository;
import com.resourcetrackingmgmt.repository.RequestsRepository;
import com.resourcetrackingmgmt.repository.TaskListRepository;
import com.resourcetrackingmgmt.repository.TechnologiesRepository;
import com.resourcetrackingmgmt.repository.TempUsersRepository;
import com.resourcetrackingmgmt.repository.UserRepository;
import com.resourcetrackingmgmt.service.ResourceTrackingService;

/**
 * @author Kranthichandu
 *
 */
@Service
@Transactional
public class ResourceTrackingServiceImpl implements ResourceTrackingService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	GroupsRepository groupsRepository;

	@Autowired
	TaskListRepository taskListRepository;

	@Autowired
	RequestsRepository requestsRepository;

	@Autowired
	TechnologiesRepository technologiesRepository;

	@Autowired
	TempUsersRepository tempUsersRepository;

	@Override
	public void userRegistration(TempUsers tempUsers) {
		tempUsersRepository.save(tempUsers);
	}

	@Override
	public void createGroup(Groups groups) {
		groupsRepository.save(groups);
	}

	@Override
	public void createTaskGroup(TaskList taskList) {
		taskListRepository.save(taskList);
	}

	@Override
	public void createLeaveRequest(Requests requests) {
		requestsRepository.save(requests);
	}

	@Override
	public void materialRequest(Requests req) {
		requestsRepository.save(req);
	}

}
