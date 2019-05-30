import { Component, OnInit } from '@angular/core';
import { UserService, Requests, TaskList } from '../../service/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
/* To Capture Course Extension Request by Resource */
export class CourseComponent implements OnInit {

  tasklist: TaskList[];
  request: Requests = new Requests("", "", "", "", "", "", "", "", "", "", "", "", "", "");
  tasknameList = JSON.parse(localStorage.getItem("tname"));
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getResourceTaskDetails().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.tasklist = response;
    localStorage.setItem("tname", JSON.stringify(this.tasklist));
  }
  /* To Raise a Request */
  createCourseRequest(): void {
    this.UserService.createCourseRequest(this.request, this.tasknameList.taskName)
      .subscribe(data => {
        alert("Course Request submitted successfully.");
        location.reload();
      });
  };

}