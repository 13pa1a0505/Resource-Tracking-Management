import { Component, OnInit } from '@angular/core';
import { UserService, TaskList, Users } from '../service/user.service';

@Component({
  selector: 'app-resource-grouptasks',
  templateUrl: './resource-grouptasks.component.html',
  styleUrls: ['./resource-grouptasks.component.css']
})
/* To get Group Tasks Assigned by his/her Lead */
export class ResourceGrouptasksComponent implements OnInit {

  grouptaskList: TaskList[];
  taskList: TaskList = new TaskList("", "", "", "", "", "", "", "", "", "")
  tasklist: TaskList[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getGroupTaskDetails().subscribe(
      response => this.handleSuccessfulGroupResponse(response),
    );
  }


  handleSuccessfulGroupResponse(response) {
    this.grouptaskList = response;
  }

  /* To Update Status of a Task */
  statusUpdate(taskId, progress): void {
    this.userService.statusUpdate(this.taskList, taskId, progress)
      .subscribe(data => {
        alert("Status Updated successfully.");
        location.reload();
      });
  };

}