package com.resourcetrackingmgmt.service;

import com.resourcetrackingmgmt.model.Groups;
import com.resourcetrackingmgmt.model.Requests;
import com.resourcetrackingmgmt.model.TaskList;
import com.resourcetrackingmgmt.model.TempUsers;

/**
 * @author Kranthichandu
 *
 */
public interface ResourceTrackingService {
	public void userRegistration(TempUsers tempUsers);

	public void createGroup(Groups groups);

	public void createTaskGroup(TaskList taskList);

	public void createLeaveRequest(Requests requests);

	public void materialRequest(Requests req);

}
