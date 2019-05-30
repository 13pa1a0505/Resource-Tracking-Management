import { Component, OnInit } from '@angular/core';
import { UserService, TaskList, Users } from '../service/user.service';

@Component({
  selector: 'app-resource-tasks',
  templateUrl: './resource-tasks.component.html',
  styleUrls: ['./resource-tasks.component.css']
})
/* To Display Tasks Assigned by Lead to resource */
export class ResourceTasksComponent implements OnInit {

  grouptaskList: TaskList[];
  tasklist: TaskList[];
  taskList: TaskList = new TaskList("", "", "", "", "", "", "", "", "", "")
  users: Users[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getResourceTaskDetails().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.userService.getLeadUsers().subscribe(
      response => this.handleSuccessfulUserNamesResponse(response),
    );

    this.userService.getGroupTaskDetails().subscribe(
      response => this.handleSuccessfulGroupResponse(response),
    );

  }
  handleSuccessfulResponse(response) {
    this.tasklist = response;
  }

  handleSuccessfulUserNamesResponse(response) {
    this.users = response;
  }

  handleSuccessfulGroupResponse(response) {
    this.grouptaskList = response;
  }

  /* To Update Status of a Task by Resource */
  statusUpdate(taskId, progress): void {
    this.userService.statusUpdate(this.taskList, taskId, progress)
      .subscribe(data => {
        alert("Status Updated successfully.");
        location.reload();
      });

  };

}