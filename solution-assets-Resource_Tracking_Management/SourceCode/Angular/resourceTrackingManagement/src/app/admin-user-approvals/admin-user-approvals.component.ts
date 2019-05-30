import { Component, OnInit } from '@angular/core';
import { UserService, TempUsers, Roles } from '../service/user.service';


@Component({
  selector: 'app-admin-user-approvals',
  templateUrl: './admin-user-approvals.component.html',
  styleUrls: ['./admin-user-approvals.component.css']
})
/* Component to enable Admin to approve/ Reject a User */
export class AdminUserApprovalsComponent implements OnInit {

  public show_dialog: boolean = false;
  public show_dropdown: boolean = false;
  TempUsers: TempUsers[];
  roles: Roles[];
  roleList = JSON.parse(localStorage.getItem("role"));
  userList = JSON.parse(localStorage.getItem("user"));
  uid:string;
  constructor(
    private httpClientService: UserService
  ) { }

  ngOnInit() {
    this.httpClientService.getAdminTaskUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.httpClientService.getRoles().subscribe(
      rolesresponse => this.handleSuccessfulRolesResponse(rolesresponse),
    );
  }

  handleSuccessfulResponse(response) {
    this.TempUsers = response;
  }

  handleSuccessfulRolesResponse(rolesresponse) {
    this.roles = rolesresponse;
    localStorage.setItem("role", JSON.stringify(this.roles));
  }


  // TO approve a User and to assign A role
  approveUser(roleName): void {
    this.uid=localStorage.getItem("userId");
    let users: TempUsers;
    this.httpClientService.approveUser(this.uid, roleName)
      .subscribe(data => {
        alert("Request Approved successfully.");
        this.TempUsers = this.TempUsers.filter(u => u !== users);
        this.roles = this.roles.filter(u => u !== roleName);
        location.reload();
      })
  };

  // To reject a User
  rejectUser(user: TempUsers): void {
    this.httpClientService.rejectUser(user)
      .subscribe(data => {
        alert("Request Rejected.");
        this.TempUsers = this.TempUsers.filter(u => u !== user);
      })
  };

  // To get Role DropDown when Admin click on Approve
  toggledropdown(userId) {
    localStorage.setItem("userId", userId);
    this.show_dropdown = !this.show_dropdown;
  }
}