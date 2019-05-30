package com.resourcetrackingmgmt;

import static org.junit.Assert.assertEquals;

import java.time.LocalDate;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.resourcetrackingmgmt.controller.ResourceTrackingController;
import com.resourcetrackingmgmt.model.Roles;
import com.resourcetrackingmgmt.model.TaskList;
import com.resourcetrackingmgmt.model.Technologies;
import com.resourcetrackingmgmt.model.TempUsers;
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
@RunWith(SpringRunner.class)
@SpringBootTest
public class ResourceTrackingManagementApplicationTests {

	@InjectMocks
	public ResourceTrackingController resourcetrackingController;

	@Autowired
	public UserRepository usersRepository;

	@Autowired
	public RoleRepository roleRepository;

	@Autowired
	public TaskListRepository taskListRepository;

	@Autowired
	public RequestsRepository requestsRepository;

	@Autowired
	public TechnologiesRepository technologiesRepository;

	@Autowired
	public TempUsersRepository tempUsersRepository;

	@Autowired
	public ResourceTrackingService resourceTrackingService;

	@Test
	public void contextLoads() {
	}

	/**
	 * Test method on User Table
	 */
	@Test
	public void testCheckUser() {
		long count = usersRepository.count();
		assertEquals(1, count);
	}

	/**
	 * Test method on Roles Table
	 */
	@Test
	public void testCheckRoles() {
		List<Roles> role = roleRepository.findAll();
		assertEquals(3, role.size());
	}

	/**
	 * Test method on TaskList Table
	 */
	@Test
	public void testTasks() {
		List<TaskList> tasks = taskListRepository.findAll();
		assertEquals(0, tasks.size());

	}

	/**
	 * Test method on Requests Table
	 */
	@Test
	public void testRequests() {
		long count = requestsRepository.count();
		assertEquals(0, count);
	}

	/**
	 * Test method on Technologies Table
	 */
	@Test
	public void testTechnologies() {
		List<Technologies> technology = technologiesRepository.findAll();
		assertEquals(3, technology.size());

	}

	/**
	 * Test method on Registration
	 */
	@Test
	public void testOnRegistration() {
		List<TempUsers> tempUsersBefore = tempUsersRepository.findAll();
		assertEquals(1, tempUsersBefore.size());
		TempUsers tempUsers = new TempUsers();
		tempUsers.setFirstName("Test first Name");
		tempUsers.setMiddleName("Test MId Name");
		tempUsers.setLastName("Test Last Name");
		tempUsers.setEmail("test@gmail.com");
		tempUsers.setAddress("Hyderabad");
		tempUsers.setApprovedBy("Tester");
		tempUsers.setCreatedBy("JUNIT");
		tempUsers.setGender("Other");
		tempUsers.setUserId("TesterId");
		tempUsers.setSecretAnswer("secret test");
		tempUsers.setSecurityQuestion("Pet?");
		tempUsers.setMobileNumber(234567876);
		tempUsers.setApprovedOn(LocalDate.now());
		tempUsers.setCreatedOn(LocalDate.now());
		tempUsers.setUpdatedOn(LocalDate.now());
		tempUsers.setDateOfBirth(LocalDate.now());
		tempUsers.setTechnology("Testing");
		tempUsers.setStatus("Pass");
		resourceTrackingService.userRegistration(tempUsers);

		List<TempUsers> tempUsersAfter = tempUsersRepository.findAll();
		assertEquals(2, tempUsersAfter.size());
	}

}
