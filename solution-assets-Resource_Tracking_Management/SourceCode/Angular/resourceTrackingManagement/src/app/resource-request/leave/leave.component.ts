import { Component, OnInit } from '@angular/core';
import { UserService, Requests } from '../../service/user.service';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
/* To capture a Leave request Raised by Resource */
export class LeaveComponent implements OnInit {

  request: Requests = new Requests("", "", "", "", "", "", "", "", "", "", "", "", "", "");
  constructor(private UserService: UserService) { }


  ngOnInit() {
  }
  /* To raise a Leave Request */
  createLeaveRequest(): void {
    this.UserService.createLeaveRequest(this.request)
      .subscribe(data => {
        alert("Leave Request submitted successfully.");
        console.log(this.request);
        location.reload();
      });
  };

}