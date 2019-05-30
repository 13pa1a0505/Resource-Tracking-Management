import { Component, OnInit } from '@angular/core';
import { UserService, Groups, Users } from '../service/user.service';


@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css']
})
/* To Create a Group by Admin */
export class GroupCreationComponent implements OnInit {

  public create_group: boolean = false;
  public update_group: boolean = false;

  selectedUsers = [];
  dropdownSettings = {};

  groups: Groups[];
  user: Users[];
  users: Users = new Users("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  group: Groups = new Groups("", "", "", "", "", "");

  leadList = JSON.parse(localStorage.getItem("leads"));
  groupList = JSON.parse(localStorage.getItem("group"));
  groupUserList = JSON.parse(localStorage.getItem("Users"));
  selected = localStorage.getItem("list");



  constructor(private UserService: UserService) { }


  ngOnInit() {
    this.UserService.getLeads().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.UserService.getGroups().subscribe(
      response => this.handleSuccessfulGroupsResponse(response),
    );

    this.UserService.getGroupUsers().subscribe(
      response => this.handleSuccessfulGroupUsersResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
    localStorage.setItem("leads", JSON.stringify(this.users));
  }

  handleSuccessfulGroupsResponse(response) {
    this.groups = response;
    localStorage.setItem("group", JSON.stringify(this.groups));
  }

  handleSuccessfulGroupUsersResponse(response) {
    this.user = response;
    localStorage.setItem("Users", JSON.stringify(this.user));
  }

  /* Method to create a Group */
  createGroup(groupName, userId, startDate, endDate, technology): void {
    this.UserService.createGroup(groupName, userId, startDate, endDate, technology)
      .subscribe(data => {
        alert("Group Created successfully.");
        location.reload();
        location.reload();
      });
  }

  /* Method to delete a Group */
  deleteGroup(groupId): void {
    let val = groupId;
    this.UserService.deleteGroup(val)
      .subscribe( data => {
        alert("Group deleted successfully.");
        location.reload();
      })
  };


  toggleCreateGroup($event) {
    if ($event.target.id === 'btTogglec') {
      this.create_group = !this.create_group;
      this.update_group = false;
    }
  }
  toggleUpdateGroup($event) {
    if ($event.target.id === 'btToggleu') {
      this.update_group = !this.update_group;
      this.create_group = false;
    }
  }

  /* Mthod to add Resources to a Group */
  updateGroup(groupName, userId): void {
    console.log(groupName, userId);
    this.UserService.updateGroup(this.groupList.groupName, this.groupUserList.userId)
      .subscribe(data => {
        alert("Group updated successfully.");
        console.log(this.group);
        localStorage.clear();
        location.reload();
      });
  }

}
