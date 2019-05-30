import { Component, OnInit } from '@angular/core';
import { UserService, TempUsers, Requests } from '../service/user.service';


@Component({
  selector: 'app-course-request',
  templateUrl: './course-request.component.html',
  styleUrls: ['./course-request.component.css']
})
/* To display all the Requests to Lead Raised by User*/
export class CourseRequestComponent implements OnInit {

  Requests: Requests[];
  constructor(private httpClientService: UserService) { }

  ngOnInit() {
    this.httpClientService.getRequests().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.Requests = response;
  }
  // To reject a Request By Lead
  rejectRequest(req: Requests): void {
    this.httpClientService.rejectRequest(req)
      .subscribe(data => {
        alert("Request Rejected.");
        this.Requests = this.Requests.filter(u => u !== req);
      })
  };
  // To approve a Request by Lead
  approveRequest(req: Requests): void {
    this.httpClientService.approveRequest(req)
      .subscribe(data => {
        alert("Request Approved Successfully!");
        this.Requests = this.Requests.filter(u => u !== req);
      })
  };


}