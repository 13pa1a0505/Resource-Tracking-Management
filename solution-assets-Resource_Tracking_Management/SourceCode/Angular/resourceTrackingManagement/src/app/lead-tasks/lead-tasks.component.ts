import { Component, OnInit } from '@angular/core';
import { UserService, Groups, Users, TaskList } from '../service/user.service';

@Component({
  selector: 'app-lead-tasks',
  templateUrl: './lead-tasks.component.html',
  styleUrls: ['./lead-tasks.component.css']
})
/* To Assign Tasks to Group and Individual Users */
export class LeadTasksComponent implements OnInit {

  public assign_group: boolean = false;
  public assign_individual: boolean = false;

  resourceList: Users[];

  names: Users[];
  groups: Groups[];
  groupList = JSON.parse(localStorage.getItem("group"));
  namesList = JSON.parse(localStorage.getItem("name"));

  tasklist: TaskList = new TaskList("", "", "", "", "", "", "", "", "", "");
  constructor(
    private UserService: UserService
  ) { }


  ngOnInit() {
    this.UserService.getLeadGroups().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.UserService.getLeadUsers().subscribe(
      response => this.handleSuccessfulUserNamesResponse(response),
    );
  }


  handleSuccessfulResponse(response) {
    this.groups = response;
    localStorage.setItem("group", JSON.stringify(this.groups));
  }

  handleSuccessfulUserNamesResponse(response) {
    this.names = response;
    localStorage.setItem("name", JSON.stringify(this.names));
  }

  /* To assign Group Task */
  createTask(): void {
    this.UserService.createTask(this.tasklist, this.groupList.groupName)
      .subscribe(data => {
        alert("Task Created successfully.");
        location.reload();
      });

  };


  /* To Assign Individual Tasks */
  createIndividualTask(): void {
    this.UserService.createIndividualTask(this.tasklist, this.namesList.userId)
      .subscribe(data => {
        alert("Task Created successfully.");
        location.reload();
      });

  };
  toggleAssignGroup($event) {
    if ($event.target.id === 'btToggle') {
      this.assign_group = !this.assign_group;
      this.assign_individual = false;
    }
  }
  toggleAssignIndi($event) {
    if ($event.target.id === 'btTogglei') {
      this.assign_individual = !this.assign_individual;
      this.assign_group = false;

    }
  }
}