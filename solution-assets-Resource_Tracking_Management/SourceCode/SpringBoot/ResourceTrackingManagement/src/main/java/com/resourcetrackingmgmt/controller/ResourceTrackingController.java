package com.resourcetrackingmgmt.controller;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resourcetrackingmgmt.model.Groups;
import com.resourcetrackingmgmt.model.Registration;
import com.resourcetrackingmgmt.model.RegistrationTechnologies;
import com.resourcetrackingmgmt.model.Requests;
import com.resourcetrackingmgmt.model.Roles;
import com.resourcetrackingmgmt.model.TaskList;
import com.resourcetrackingmgmt.model.Technologies;
import com.resourcetrackingmgmt.model.TempUsers;
import com.resourcetrackingmgmt.model.Users;
import com.resourcetrackingmgmt.repository.GroupsRepository;
import com.resourcetrackingmgmt.repository.RegistrationRepository;
import com.resourcetrackingmgmt.repository.RegistrationTechnologyRepository;
import com.resourcetrackingmgmt.repository.RequestsRepository;
import com.resourcetrackingmgmt.repository.RoleRepository;
import com.resourcetrackingmgmt.repository.TaskListRepository;
import com.resourcetrackingmgmt.repository.TechnologiesRepository;
import com.resourcetrackingmgmt.repository.TempUsersRepository;
import com.resourcetrackingmgmt.repository.UserRepository;
import com.resourcetrackingmgmt.service.ResourceTrackingService;

/**
 * @author Kranthichandu
 *
 */
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping({ "/users" })
public class ResourceTrackingController {

	@Autowired
	ResourceTrackingService resourceTrackingService;

	@Autowired
	TempUsersRepository tempUsersRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	TechnologiesRepository technologiesRepository;

	@Autowired
	GroupsRepository groupsRepository;

	@Autowired
	RequestsRepository requestsRepository;

	@Autowired
	TaskListRepository taskListRepository;

	@Autowired
	RegistrationRepository registrationRepository;

	@Autowired
	RegistrationTechnologyRepository registrationTechnologyRepository;

	@Value("${status}")
	private String status;

	@Value("${approve}")
	private String approve;

	@Value("${reject}")
	private String reject;

	@Value("${active}")
	private String active;

	@Value("${admin}")
	private String admin;

	@Value("${lead}")
	private String lead;

	@Value("${password}")
	private String password;

	@Value("${progress}")
	private String progress;

	@Value("${resource}")
	private String resource;

	@Value("${leave}")
	private String leave;

	@Value("${material}")
	private String material;

	@Value("${course}")
	private String course;

	String firstName;
	String lastName;
	String middleName;
	String name;
	long groupId;
	int id;
	String taskName;
	int taskId;
	Date date = new Date();
	Format formatter = new SimpleDateFormat("dd/MM/yyyy");
	String s = formatter.format(date);
	String userLog;
	String logInUserId;
	HttpSession session;
	int leadId;
	String leadName;
	int adminId;
	String userId;
	String groupName;
	String adminName;

	/**
	 * To get Registration Form Fields
	 * 
	 * @return
	 */
	@GetMapping(path = "/registrationfields")
	public List<Registration> getRegistrationFields() {
		return registrationRepository.findAll();
	}

	/**
	 * To get Registration Technology Form Fields
	 * 
	 * @return
	 */
	@GetMapping(path = "/registrationtechnologies")
	public List<RegistrationTechnologies> getRegistrationTechnologyFields() {
		return registrationTechnologyRepository.findAll();
	}

	/**
	 * User REgistration Method
	 * 
	 * @param gender
	 * @param securityQuestion
	 * @param technologyName
	 * @param tempUsers
	 * @return
	 */
	@PostMapping(path = { "/{gender}/{securityQuestion}/{technologyName}" })
	public TempUsers userRegistration(@PathVariable("gender") String gender,
			@PathVariable("securityQuestion") String securityQuestion,
			@PathVariable("technologyName") String technologyName, @RequestBody TempUsers tempUsers, Users users) {

		if (tempUsersRepository.count() == 0) {
			firstName = tempUsers.getFirstName();
			lastName = tempUsers.getLastName();
			name = firstName.concat(lastName);
			tempUsers.setCreatedBy(name);
			tempUsers.setUpdatedBy(name);
			tempUsers.setStatus(status);
			tempUsers.setCreatedOn(LocalDate.now());
			tempUsers.setUpdatedOn(LocalDate.now());
			tempUsers.setGender(gender);
			tempUsers.setSecurityQuestion(securityQuestion);
			tempUsers.setTechnology(technologyName);
			tempUsers.setStatus(approve);
			tempUsers.setApprovedBy(admin);
			tempUsers.setApprovedOn(LocalDate.now());
			resourceTrackingService.userRegistration(tempUsers);
			users.setFirstName(tempUsers.getFirstName());
			users.setLastName(tempUsers.getLastName());
			if (tempUsers.getMiddleName() != null)
				users.setMiddleName(tempUsers.getMiddleName());
			users.setEmail(tempUsers.getEmail());
			users.setUserId(tempUsers.getUserId());
			users.setDateOfBirth(tempUsers.getDateOfBirth());
			users.setGender(tempUsers.getGender());
			users.setStatus(tempUsers.getStatus());
			users.setMobileNUmber(tempUsers.getMobileNumber());
			users.setSecurityQuestion(tempUsers.getSecurityQuestion());
			users.setSecretAnswer(tempUsers.getSecretAnswer());
			if (tempUsers.getAddress() != null)
				users.setAddress(tempUsers.getAddress());
			users.setTechnology(tempUsers.getTechnology());
			users.setCreatedBy(tempUsers.getCreatedBy());
			users.setCreatedOn(tempUsers.getCreatedOn());
			users.setUpdatedBy(tempUsers.getUpdatedBy());
			users.setUpdatedOn(tempUsers.getUpdatedOn());
			users.setApprovedBy(tempUsers.getApprovedBy());
			users.setApprovedOn(tempUsers.getApprovedOn());
			users.setActive(active);
			users.setPassword(password);
			users.setRole(admin);
			userRepository.save(users);
		} else {
			firstName = tempUsers.getFirstName();
			lastName = tempUsers.getLastName();
			name = firstName.concat(lastName);
			tempUsers.setCreatedBy(name);
			tempUsers.setUpdatedBy(name);
			tempUsers.setStatus(status);
			tempUsers.setCreatedOn(LocalDate.now());
			tempUsers.setUpdatedOn(LocalDate.now());
			tempUsers.setGender(gender);
			tempUsers.setSecurityQuestion(securityQuestion);
			tempUsers.setTechnology(technologyName);
			resourceTrackingService.userRegistration(tempUsers);
		}
		return tempUsers;

	}

	/**
	 * Login Validation Method
	 * 
	 * @param uname
	 * @param pwd
	 * @return
	 */
	@GetMapping(value = "/loginvalidation/{uname}/{password}")
	public String loginpage(@PathVariable String uname, @PathVariable String password, HttpServletRequest request) {
		String userRole = null;
		Users resmodel = userRepository.findInfoByunameandpassword(uname, password);
		if (resmodel != null) {
			userRole = resmodel.getRole();
			logInUserId = resmodel.getUserId();
			getUser(logInUserId, request);
		} else {
			userRole = "error";
		}
		return userRole;
	}

	/**
	 * Method to get Session of Login User
	 * 
	 * @param userLog
	 * @param request
	 * @return
	 */
	public HttpSession getUser(String userLog, HttpServletRequest request) {
		session = request.getSession();
		session.setAttribute("logUserDetails", userLog);
		return session;
	}

	/**
	 * Method For Admin to approve and Assign a suitable role to User
	 * 
	 * @param userId
	 * @param role
	 * @param users
	 * @param tempUsers
	 */
	@GetMapping(path = { "/approveuser/{userId}/{role}" })
	public void approveUser(@PathVariable("userId") String userId, @PathVariable("role") String role, Users users,
			TempUsers tempUsers) {
		List<TempUsers> tempUsersList = tempUsersRepository.findAll();
		String logUser = (String) session.getAttribute("logUserDetails");

		List<Users> u = userRepository.findAll();
		for (Users us : u) {
			if (us.getRole().equals(admin)) {
				adminId = us.getId();
				adminName = us.getUserId();
			}
		}

		for (TempUsers temp : tempUsersList) {
			if (temp.getUserId().equals(userId)) {
				temp.setStatus(approve);
				temp.setApprovedOn(LocalDate.now());
				temp.setApprovedBy(logUser);
				tempUsersRepository.save(temp);
				users.setFirstName(temp.getFirstName());
				users.setLastName(temp.getLastName());
				if (temp.getMiddleName() != null)
					users.setMiddleName(temp.getMiddleName());
				users.setEmail(temp.getEmail());
				users.setUserId(temp.getUserId());
				users.setDateOfBirth(temp.getDateOfBirth());
				users.setGender(temp.getGender());
				users.setStatus(temp.getStatus());
				users.setMobileNUmber(temp.getMobileNumber());
				users.setSecurityQuestion(temp.getSecurityQuestion());
				users.setSecretAnswer(temp.getSecretAnswer());
				if (temp.getAddress() != null)
					users.setAddress(temp.getAddress());
				users.setTechnology(temp.getTechnology());
				users.setCreatedBy(temp.getCreatedBy());
				users.setCreatedOn(temp.getCreatedOn());
				users.setUpdatedBy(temp.getUpdatedBy());
				users.setUpdatedOn(temp.getUpdatedOn());
				users.setApprovedBy(logUser);
				users.setApprovedOn(temp.getApprovedOn());
				users.setActive(active);
				users.setPassword(password);
				users.setRole(role);
				if (role.equals(lead)) {
					users.setLeadId(adminId);
					users.setLeadName(adminName);
				}
				userRepository.save(users);
				break;
			}
		}

	}

	/**
	 * Admin creating group and assigning Lead to the group
	 * 
	 * @param groupName
	 * @param userId
	 * @param limitResource
	 * @param startDate
	 * @param endDate
	 * @param technology
	 * @param group
	 * @return
	 */
	@GetMapping(path = { "/creategroup/{groupName}/{userId}/{startDate}/{endDate}/{technology}" })
	public Groups createGroup(@PathVariable("groupName") String groupName, @PathVariable("userId") String userId,
			@PathVariable("startDate") String startDate, @PathVariable("endDate") String endDate,
			@PathVariable("technology") String technology, Groups group) {

		List<Users> users = userRepository.findAll();
		for (Users user : users) {
			if (user.getUserId().equals(userId)) {
				id = user.getId();
				break;
			}
		}
		group.setGroupName(groupName);
		group.setLeadId(id);
		group.setStartDate(startDate);
		group.setEndDate(endDate);
		group.setTechnology(technology);
		resourceTrackingService.createGroup(group);
		return group;
	}

	/**
	 * Assigning Task By Lead To his/her corresponding groups Lead by him
	 * 
	 * @param technology
	 * @param startDate
	 * @param endDate
	 * @param taskName
	 * @param groupName
	 * @param taskList
	 */
	@GetMapping(path = { "/createtask/{technology}/{startDate}/{endDate}/{taskName}/{groupName}" })
	public void createTaskGroup(@PathVariable("technology") String technology,
			@PathVariable("startDate") String startDate, @PathVariable("endDate") String endDate,
			@PathVariable("taskName") String taskName, @PathVariable("groupName") String groupName, TaskList taskList) {

		List<Groups> groups = groupsRepository.findAll();
		taskList.setTaskName(taskName);
		taskList.setStartDate(startDate);
		taskList.setEndDate(endDate);
		taskList.setGroupName(groupName);
		taskList.setTechnology(technology);
		taskList.setProgress(progress);
		for (Groups group : groups) {
			if (group.getGroupName().equals(groupName)) {
				taskList.setGroupId(group.getGroupId());
				break;
			}
		}
		resourceTrackingService.createTaskGroup(taskList);
	}

	/**
	 * Assigning Task By Lead To his/her corresponding group resources Individually
	 * 
	 * @param technology
	 * @param startDate
	 * @param endDate
	 * @param taskName
	 * @param groupName
	 * @param userId
	 * @param taskList
	 */
	@GetMapping(path = { "/createindividualtask/{technology}/{startDate}/{endDate}/{taskName}/{userId}" })
	public void createIndividualTask(@PathVariable("technology") String technology,
			@PathVariable("startDate") String startDate, @PathVariable("endDate") String endDate,
			@PathVariable("taskName") String taskName, @PathVariable("userId") String userId, TaskList taskList) {

		List<Groups> groups = groupsRepository.findAll();
		List<Users> users = userRepository.findAll();
		for (Users user : users) {
			if (user.getUserId().equals(userId)) {
				groupId = user.getGroupId();
			}
		}
		for (Groups group : groups) {
			if (group.getGroupId() == groupId) {
				groupName = group.getGroupName();
			}
		}

		taskList.setTaskName(taskName);
		taskList.setStartDate(startDate);
		taskList.setEndDate(endDate);
		taskList.setGroupName(groupName);
		taskList.setTechnology(technology);
		taskList.setUserId(userId);
		taskList.setProgress(progress);
		taskList.setGroupId(groupId);
		taskListRepository.save(taskList);

	}

	/**
	 * Method for Admin to reject A User
	 * 
	 * @param id
	 */
	@GetMapping(path = { "/rejectuser/{id}" })
	public void rejectUser(@PathVariable("id") int id) {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<TempUsers> tempUsersList = tempUsersRepository.findAll();
		for (TempUsers temp : tempUsersList) {
			if (temp.getId() == id) {
				temp.setStatus(reject);
				temp.setApprovedOn(LocalDate.now());
				temp.setApprovedBy(logUser);
				tempUsersRepository.save(temp);
			}
		}
	}

	/**
	 * Lead rejecting the request sent by his resources
	 * 
	 * @param id
	 */
	@GetMapping(path = { "/rejectrequest/{id}" })
	public void rejectRequest(@PathVariable("id") int id) {
		List<Requests> requestsList = requestsRepository.findAll();
		for (Requests req : requestsList) {
			if (req.getRequestId() == id) {
				req.setStatus(reject);
				requestsRepository.save(req);
			}
		}
	}

	/**
	 * Lead approving the requests sent by his resources
	 * 
	 * @param id
	 */
	@GetMapping(path = { "/approverequest/{id}" })
	public void approveRequest(@PathVariable("id") int id) {

		List<Requests> requestsList = requestsRepository.findAll();
		List<TaskList> tasks = taskListRepository.findAll();

		for (Requests req : requestsList) {
			if (req.getRequestId() == id) {
				req.setStatus(approve);
				taskName = req.getTaskName();
				String exDate = req.getExtenstionDate();
				if (exDate != null) {
					for (TaskList task : tasks) {
						if (task.getTaskName().equals(taskName)) {
							task.setEndDate(exDate);
							taskListRepository.save(task);
							break;
						}
					}
				}
				requestsRepository.save(req);
			}
		}
	}

	/**
	 * To display all the temporary users
	 * 
	 * @param tempUsers
	 * @return
	 */
	@GetMapping(path = { "/all" })
	public List<TempUsers> display(TempUsers tempUsers) {
		return tempUsersRepository.findAll();
	}

	/**
	 * To display all the resources of particular group
	 * 
	 * @return
	 */
	@GetMapping(path = { "/groupUsers" })
	public List<Users> groupUsersDisplay() {
		List<Users> user = userRepository.findAll();
		List<Users> use = new ArrayList<Users>();
		for (Users users : user) {
			if (users.getGroupId() == 0 && users.getRole().equals(resource)) {
				use.add(users);
			}
		}

		return use;
	}

	/**
	 * To display all the available leads
	 * 
	 * @return
	 */
	@GetMapping(path = { "/leads" })
	public List<Users> displayLeads() {
		List<Users> user = userRepository.findAll();
		List<Users> users = new ArrayList<Users>();
		for (Users use : user) {
			if (use.getRole().equals(lead)) {
				users.add(use);
			}
		}
		return users;
	}

	/**
	 * Displays all the Users who are waiting for Approval.
	 * 
	 * @param tempUsers
	 * @return
	 */
	@GetMapping(path = { "/admintaskusers" })
	public List<TempUsers> adminTaskListUsersDisplay(TempUsers tempUsers) {
		List<TempUsers> temps = tempUsersRepository.findAll();
		List<TempUsers> users = new ArrayList<TempUsers>();
		for (TempUsers temp : temps) {
			if (temp.getStatus().equals(status)) {
				users.add(temp);
			}
		}
		return users;
	}

	/**
	 * To display all the roles
	 * 
	 * @param roles
	 * @return
	 */
	@GetMapping(path = { "/roles" })
	public List<Roles> displayRoles(Roles roles) {
		return roleRepository.findAll();
	}

	/**
	 * To display all the requests to lead
	 * 
	 * @param requests
	 * @return
	 */
	@GetMapping(path = { "/requests" })
	public List<Requests> displayRequests() {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Requests> req = requestsRepository.findAll();
		List<Users> users = userRepository.findAll();
		List<Requests> r = new ArrayList<Requests>();

		for (Users user : users) {
			if (user.getUserId().equals(logUser)) {
				id = user.getId();
			}
		}

		for (Requests rq : req) {
			if (rq.getStatus().equals(status) && rq.getLeadId() == id) {
				r.add(rq);
			}
		}
		return r;
	}

	/**
	 * To display all the technology links to resources
	 * 
	 * @param technologies
	 * @return
	 */
	@GetMapping(path = { "/resourcelinks" })
	public List<Technologies> displaylinksResource(Technologies technologies) {
		return technologiesRepository.findAll();
	}

	/**
	 * To display all the technology links to Admin and Lead
	 * 
	 * @param technologies
	 * @return
	 */
	@GetMapping(path = { "/links" })
	public List<Technologies> displaylinks(Technologies technologies) {
		return technologiesRepository.findAll();
	}

	/**
	 * To add a new technology link
	 * 
	 * @param technology
	 * @return
	 */
	@PostMapping(path = { "/addlink" })
	public int addlink(@RequestBody Technologies technology) {

		List<Technologies> techs = technologiesRepository.findAll();
		long count = technologiesRepository.count();
		int i = 1;

		if (count == 0) {
			i = 2;
			technologiesRepository.save(technology);
			return i;
		} else {
			for (Technologies technologies : techs) {
				if (technologies.getSubTechnologyName().equals(technology.getSubTechnologyName())) {
					technologies.setLinks(technology.getLinks());
					technologiesRepository.save(technologies);
					i = 3;
					break;
				}
			}

		}
		if (i == 1) {
			technologiesRepository.save(technology);
		}
		return i;
	}

	/**
	 * Method To display all the users under particular lead
	 * 
	 * @param Users
	 * @return
	 */
	@GetMapping(path = { "/Lead/all" })
	public List<Users> displayUsers() {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Users> users = userRepository.findAll();
		List<Users> leadUserList = new ArrayList<Users>();
		for (Users u : users) {
			if (u.getUserId().equals(logUser)) {
				id = u.getId();
			}
		}
		for (Users user : users) {
			if (user.getLeadId() == id) {
				leadUserList.add(user);
			}
		}
		return leadUserList;
	}

	/**
	 * To display groups of Corresponding Lead who has logged in
	 * 
	 * @param groups
	 * @return
	 */
	@GetMapping(path = { "/leadgroups" })
	public List<Groups> displayLeadGroups() {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Users> users = userRepository.findAll();
		List<Groups> groups = groupsRepository.findAll();
		List<Groups> leadGroups = new ArrayList<Groups>();
		for (Users u : users) {
			if (u.getUserId().equals(logUser)) {
				id = u.getId();
			}
		}
		for (Groups group : groups) {
			if (group.getLeadId() == id) {
				leadGroups.add(group);
			}
		}
		return leadGroups;
	}

	@GetMapping(path = { "/groups" })
	public List<Groups> displayGroups(Groups groups) {
		return groupsRepository.findAll();
	}

	/**
	 * To create a leave request by User
	 * 
	 * @param requests
	 */
	@PostMapping(path = { "/createLeaveRequest" })
	public void createLeaveRequest(@RequestBody Requests requests) {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Users> user = userRepository.findAll();
		for (Users users : user) {
			if (users.getUserId().equals(logUser)) {
				id = users.getId();
				userId = users.getUserId();
				leadId = users.getLeadId();
			}
		}
		requests.setTypeOfRequest(leave);
		requests.setStatus(status);
		requests.setSubmittedOn(date);
		requests.setUserId(id);
		requests.setLeadId(leadId);
		requests.setUserName(userId);
		resourceTrackingService.createLeaveRequest(requests);
	}

	/**
	 * To create a course extension request by User
	 * 
	 * @param extensionDate
	 * @param comments
	 * @param taskName
	 * @param requests
	 * @return
	 */
	@GetMapping(path = { "/createCourseRequest/{extensionDate}/{comments}/{taskName}" })
	public int createCourseRequest(@PathVariable("extensionDate") String extensionDate,
			@PathVariable("comments") String comments, @PathVariable("taskName") String taskName, Requests requests) {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<TaskList> taskList = taskListRepository.findAll();
		for (TaskList tasklist : taskList) {
			if (tasklist.getTaskName().equals(taskName)) {
				taskId = tasklist.getTaskId();
				break;
			}
		}

		List<Users> user = userRepository.findAll();
		for (Users users : user) {
			if (users.getUserId().equals(logUser)) {
				id = users.getId();
				userId = users.getUserId();
				leadId = users.getLeadId();
			}
		}

		requests.setComments(comments);
		requests.setExtenstionDate(extensionDate);
		requests.setStatus(status);
		requests.setSubmittedOn(date);
		requests.setTaskId(taskId);
		requests.setTypeOfRequest(course);
		requests.setTaskName(taskName);
		requests.setUserId(id);
		requests.setLeadId(leadId);
		requests.setUserName(userId);
		requestsRepository.save(requests);
		return taskId;
	}

	/**
	 * to create a material request by User
	 * 
	 * @param req
	 */
	@PostMapping(path = { "/MaterialRequest" })
	public void materialRequest(@RequestBody Requests req) {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Users> user = userRepository.findAll();
		for (Users users : user) {
			if (users.getUserId().equals(logUser)) {
				id = users.getId();
				userId = users.getUserId();
				leadId = users.getLeadId();
			}
		}
		req.setTypeOfRequest(material);
		req.setSubmittedOn(date);
		req.setStatus(status);
		req.setUserId(id);
		req.setLeadId(leadId);
		req.setUserName(userId);
		resourceTrackingService.materialRequest(req);
	}

	/**
	 * To update task status by resources
	 * 
	 * @param progress
	 * @param taskId
	 */
	@GetMapping(path = { "/statusupdate/{progress}/{taskId}" })
	public void statusUpdate(@PathVariable("progress") String progress, @PathVariable("taskId") int taskId) {
		List<TaskList> task = taskListRepository.findAll();
		for (TaskList tasks : task) {
			if (tasks.getTaskId() == taskId) {
				tasks.setProgress(progress);
				taskListRepository.save(tasks);
				break;
			}
		}

	}

	/**
	 * to add members into a group by Admin
	 * 
	 * @param groupName
	 * @param userId
	 */
	@GetMapping(path = { "/updateGroup/{groupName}/{userId}" })
	public void updateGroup(@PathVariable("groupName") String groupName, @PathVariable("userId") String userId) {
		List<Groups> group = groupsRepository.findAll();
		List<Users> users = userRepository.findAll();
		for (Groups groups : group) {
			if (groups.getGroupName().equals(groupName)) {
				groupId = groups.getGroupId();
				leadId = groups.getLeadId();
			}
		}
		for (Users user : users) {
			if (user.getId() == leadId) {
				leadName = user.getUserId();
			}
		}
		for (Users user : users) {
			if (user.getUserId().equals(userId)) {
				user.setGroupId(groupId);
				user.setLeadId(leadId);
				user.setLeadName(leadName);
				user.setGroupName(groupName);
				userRepository.save(user);
			}
		}

	}

	/**
	 * to get the list of task details to lead for the resources under him
	 * 
	 * @param taskList
	 * @return
	 */
	@GetMapping(path = { "/taskdetails" })
	public List<TaskList> getTaskDetails() {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Users> user = userRepository.findAll();
		List<TaskList> taskLists = taskListRepository.findAll();
		List<TaskList> leadTask = new ArrayList<TaskList>();
		for (Users users : user) {
			if (users.getUserId().equals(logUser)) {
				leadId = users.getId();
			}
		}
		for (Users users : user) {
			if (users.getLeadId() == leadId) {
				id = users.getId();
				userId = users.getUserId();
				groupId = users.getGroupId();
			}
		}
		for (TaskList taskList : taskLists) {
			if (taskList.getGroupId() == groupId) {

				leadTask.add(taskList);
			}
		}
		return leadTask;
	}

	/**
	 * displaying resources individual tasks assigned to them
	 * 
	 * @param request
	 * @return
	 */
	@GetMapping(path = { "/resourcetaskdetails" })
	public List<TaskList> getResourceTaskDetails() {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Users> user = userRepository.findAll();
		List<TaskList> taskLists = taskListRepository.findAll();
		List<TaskList> resourceTask = new ArrayList<TaskList>();
		for (Users users : user) {
			if (users.getUserId().equals(logUser)) {
				groupId = users.getGroupId();
			}
		}
		for (TaskList taskList : taskLists) {
			if (taskList.getGroupId() == groupId) {
				if (taskList.getUserId() != null) {
					if (taskList.getUserId().equals(logUser)) {
						resourceTask.add(taskList);
					}
				}
			}
		}

		return resourceTask;
	}

	/**
	 * displaying resources group tasks which they belong to
	 * 
	 * @param request
	 * @return
	 */
	@GetMapping(path = { "/grouptaskdetails" })
	public List<TaskList> getGroupTaskDetails() {
		String logUser = (String) session.getAttribute("logUserDetails");
		List<Users> user = userRepository.findAll();
		List<TaskList> taskLists = taskListRepository.findAll();
		List<TaskList> resourceTask = new ArrayList<TaskList>();
		for (Users users : user) {
			if (users.getUserId().equals(logUser)) {
				groupId = users.getGroupId();
			}
		}
		for (TaskList taskList : taskLists) {
			if (taskList.getGroupId() == groupId) {
				if (taskList.getUserId() == null)
					resourceTask.add(taskList);
			}
		}

		return resourceTask;
	}

	/**
	 * Enables Admin to delete a technology link
	 * 
	 * @param technologyId
	 */
	@GetMapping(path = { "/deleteLink/{technologyId}" })
	public void deleteLink(@PathVariable("technologyId") long technologyId) {
		List<Technologies> technology = technologiesRepository.findAll();
		for (Technologies tech : technology) {
			if (tech.getTechnologyId() == technologyId) {
				technologiesRepository.deleteById(technologyId);
			}
		}
	}

	/**
	 * Enables Admin to delete a group
	 * 
	 * @param groupId
	 */
	@GetMapping(path = { "/deleteGroup/{groupId}" })
	public void deleteGroup(@PathVariable("groupId") long groupId) {
		List<Groups> group = groupsRepository.findAll();
		List<Users> users = userRepository.findAll();
		for (Users user : users) {
			if (user.getGroupId() == groupId) {
				user.setGroupId(0);
				user.setLeadId(0);
				user.setLeadName(null);
				user.setGroupName(null);
				userRepository.save(user);
			}
		}
		for (Groups groups : group) {
			if (groups.getGroupId() == groupId) {
				groupsRepository.deleteById(groupId);
			}
		}

	}

	/**
	 * To display Profile Card of a User
	 * 
	 * @return
	 */
	@GetMapping(path = { "/resourceprofile" })
	public List<Users> displayResourceProfile() {
		userId = (String) session.getAttribute("logUserDetails");
		List<Users> user = userRepository.findAll();
		List<Users> profile = new ArrayList<Users>();
		for (Users users : user) {
			if (users.getUserId().equals(userId)) {
				profile.add(users);
			}
		}
		return profile;
	}

}
