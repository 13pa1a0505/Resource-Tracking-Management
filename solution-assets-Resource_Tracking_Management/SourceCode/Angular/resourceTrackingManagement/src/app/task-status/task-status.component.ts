import { Component, OnInit } from '@angular/core';
import { UserService, TaskList, Users } from '../service/user.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
/* To Display all the tasks and status assigned by corresponding Lead */
export class TaskStatusComponent implements OnInit {

  tasklist: TaskList[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTaskDetails().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.tasklist = response;
  }
}