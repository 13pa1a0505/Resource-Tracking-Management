import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';


export class TempUsers {
  constructor(
    public id: number | string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public email: string,
    public userId: string,
    public dateOfBirth: Date | string,
    public gender: string,
    public mobileNumber: number | string,
    public status: string,
    public securityQuestion: string,
    public secretAnswer: string,
    public address: string,
    public technology: string,
    public createdBy: string,
    public createdOn: Date | string,
    public updatedBy: string,
    public updatedOn: Date | string,
    public approvedBy: string,
    public approvedOn: Date | string
  ) { }
}

export class Roles {
  constructor(
    public roleId: number | String,
    public roleName: string
  ) { }
}


export class Groups {
  constructor(
    public groupId: number | string,
    public groupName: string,
    public startDate: Date | string,
    public endDate: Date | string,
    public leadId: number | string,
    public technology: string
  ) { }

}

export class Users {
  constructor(
    public id: number | string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public email: string,
    public userId: string,
    public dateOfBirth: Date | string,
    public gender: string,
    public mobileNUmber: number | string,
    public status: string,
    public securityQuestion: string,
    public secretAnswer: string,
    public technology: string,
    public role: string,
    public groupId: number | string,
    public groupName: string,
    public leadId: number | string,
    public leadName: string,
    public password: string,
    public createdBy: string,
    public createdOn: Date | string,
    public updatedBy: string,
    public updatedOn: Date | string,
    public active: string,
    public approvedBy: string,
    public approvedOn: Date | string
  ) { }
}

export class Technologies {
  constructor(
    public technologyId: number | string,
    public technologyName: string,
    public subTechnologyName: string,
    public links: string
  ) {

  }
}

export class TaskList {
  constructor(
    public taskId: number | string,
    public taskName: string,
    public firstName: string,
    public progress: string,
    public technology: string,
    public groupId: number | string,
    public startDate: Date | string,
    public endDate: Date | string,
    public taskStatus: string,
    public groupName: string

  ) { }
}

export class Requests {
  constructor(
    public requestId: number | string,
    public typeOfRequest: string,
    public userId: number | string,
    public userName: string,
    public leadId: number | string,
    public leaveStartDate: Date | string,
    public leaveEndDate: Date | string,
    public taskId: number | string,
    public extenstionDate: Date | string,
    public comments: string,
    public submittedOn: Date | string,
    public status: string,
    public taskName: string,
    public technology: string,
  ) { }
}

export class Registration {
  constructor(
    public id: number | string,
    public gender: string,
    public securityQuestion: string,
  ) { }
}

export class RegistrationTechnologies {
  constructor(
    public id: number | string,
    public technologyName: string,
  ) { }
}


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  /* To get Registration Fields */
  public getRegistrationFields() {
    return this.httpClient.get<Registration[]>("http://localhost:8089/users/registrationfields")
  }

  /* To get Registration Technology Fields */
  public getRegistrationTechnology() {
    return this.httpClient.get<RegistrationTechnologies[]>("http://localhost:8089/users/registrationtechnologies")
  }

  /* To Display Users in Admin DashBoard */
  public getUsers() {
    return this.httpClient.get<TempUsers[]>("http://localhost:8089/users/all");
  }

  /* To display Users belong to selected Group */
  public getGroupUsers() {
    return this.httpClient.get<Users[]>("http://localhost:8089/users/groupUsers");
  }

  /* To get all the Leads in Admin DashBoard to assign a Group */
  public getLeads() {
    return this.httpClient.get<Users>("http://localhost:8089/users/leads");
  }

  /* To display all the Requests by resource to Lead DashBoard */
  public getRequests() {
    return this.httpClient.get<Requests[]>("http://localhost:8089/users/requests");
  }

  /* To Display all Registered users for Approval Process */
  public getAdminTaskUsers() {
    return this.httpClient.get<TempUsers[]>("http://localhost:8089/users/admintaskusers");
  }

  /* To display All roles to assign Resource */
  public getRoles() {
    return this.httpClient.get<Roles[]>("http://localhost:8089/users/roles");
  }

  /* To display Resource Profile Card */
  public getResourceProfile() {
    return this.httpClient.get<Users[]>("http://localhost:8089/users/resourceprofile")
  }

  /* To reject a Registered User */
  public rejectUser(TempUsers) {
    return this.httpClient.get<TempUsers>("http://localhost:8089/users" + "/rejectuser/" + TempUsers.id);
  }

  /* To Approve a Request of User by corresponding Lead */
  public approveRequest(Requests) {
    return this.httpClient.get<Requests>("http://localhost:8089/users" + "/approverequest/" + Requests.requestId);
  }

  /* To Reject a Request Raised by resourse in Lead DashBoard */
  public rejectRequest(Requests) {
    return this.httpClient.get<Requests>("http://localhost:8089/users" + "/rejectrequest/" + Requests.requestId);
  }

  /* To Delete a Link from Technology Stack by Admin */
  public deleteLink(technologyId) {
    return this.httpClient.get<Technologies>("http://localhost:8089/users" + "/deleteLink/" + technologyId);
  }

  /* To create a group by Admin */
  public createGroup(groupName, leadList, startDate, endDate, technology) {
    return this.httpClient.get<Groups[]>("http://localhost:8089/users/creategroup/" + groupName + "/" + leadList.userId + "/" + startDate + "/" + endDate + "/" + technology);
  }

  /* Register a User */
  public createUser(tempuser: TempUsers, gender, securityQuestion, technologyName) {
    return this.httpClient.post<TempUsers>("http://localhost:8089/users/reg" + "/" + gender + "/" + securityQuestion + "/" + technologyName, tempuser);
  }

  /* To Add a resource to a Group by Admin */
  public updateGroup(groupList, groupUserList) {
    return this.httpClient.get<Groups[]>("http://localhost:8089/users/updateGroup/" + groupList.groupName + "/" + groupUserList.userId);
  }

  /* To add/Update a Link in Technology Stack by Admin */
  public addlink(technology) {
    return this.httpClient.post<Technologies>("http://localhost:8089/users" + "/addlink/", technology);
  }

  /* To get the List of Technologies to User and Lead */
  public getTechnologies() {
    return this.httpClient.get<Technologies[]>("http://localhost:8089/users/links");
  }

  /* To Approve a registered User and to assign a Role by admin */
  public approveUser(userId, roleList) {
    return this.httpClient.get<TempUsers[]>("http://localhost:8089/users" + "/approveuser/" + userId + "/" + roleList.roleName);
  }

  /* To get List Of Users belongs to particular Lead */
  public getLeadUsers() {
    return this.httpClient.get<Users[]>("http://localhost:8089/users/Lead/all");
  }

  /* To display the Groups Which are assigned to corresponding Lead */
  public getLeadGroups() {
    return this.httpClient.get<Groups[]>("http://localhost:8089/users/leadgroups");
  }

  /* To Display Groups to update/add a Resource */
  public getGroups() {
    return this.httpClient.get<Groups[]>("http://localhost:8089/users/groups");
  }

  /* To Assign a Task to Group by Lead */
  public createTask(tasklist, groupList) {
    return this.httpClient.get<TaskList[]>("http://localhost:8089/users/createtask/" + tasklist.technology + "/" + tasklist.startDate + "/" + tasklist.endDate + "/" + tasklist.taskName + "/" + groupList.groupName);
  }

  /* To assign Task by Lead to Individual resources */
  public createIndividualTask(tasklist, namesList) {
    return this.httpClient.get<TaskList[]>("http://localhost:8089/users/createindividualtask/" + tasklist.technology + "/" + tasklist.startDate + "/" + tasklist.endDate + "/" + tasklist.taskName + "/" + namesList.userId);
  }

  /* To create a Leave Request by User */
  public createLeaveRequest(request) {
    return this.httpClient.post<Requests>("http://localhost:8089/users/createLeaveRequest/", request);
  }

  /* To create Course Extension Request by User */
  public createCourseRequest(request, tasknameList) {
    return this.httpClient.get<Requests[]>("http://localhost:8089/users/createCourseRequest/" + request.extenstionDate + "/" + request.comments + "/" + tasknameList.taskName);
  }

  /* To create a Material Request by User */
  public MaterialRequest(request) {
    return this.httpClient.post<Requests>("http://localhost:8089/users/MaterialRequest/", request);
  }

  /* To display all the tasks assigned by Lead to User in Lead DashBoard */
  public getTaskDetails() {
    return this.httpClient.get<TaskList[]>("http://localhost:8089/users/taskdetails");
  }

  /* To diaplay all the tasks assigned to user in Group category */
  public getResourceTaskDetails() {
    return this.httpClient.get<TaskList[]>("http://localhost:8089/users/resourcetaskdetails");
  }

  /* To Display all the tasks assigned to User in Individual category */
  public getGroupTaskDetails() {
    return this.httpClient.get<TaskList[]>("http://localhost:8089/users/grouptaskdetails");
  }

  /* To Update status of a task by User in User DashBoard */
  public statusUpdate(taskList, taskId, progress) {
    return this.httpClient.get<TaskList[]>("http://localhost:8089/users/statusupdate/" + progress + "/" + taskId);
  }

  /* To delete a Group by admin */
  public deleteGroup(groupId) {
    return this.httpClient.get<Groups>("http://localhost:8089/users" + "/deleteGroup/" + groupId);
  }

}