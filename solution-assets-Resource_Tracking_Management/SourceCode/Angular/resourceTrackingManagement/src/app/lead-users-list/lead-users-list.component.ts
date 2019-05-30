import { Component, OnInit } from '@angular/core';
import { UserService, Users } from '../service/user.service';

@Component({
  selector: 'app-lead-users-list',
  templateUrl: './lead-users-list.component.html',
  styleUrls: ['./lead-users-list.component.css']
})
/* To Display Users Under Corresponding Lead */
export class LeadUsersListComponent implements OnInit {

  names: Users[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLeadUsers().subscribe(
      response => this.handleSuccessfulResponse(response),

    );
  }
  handleSuccessfulResponse(response) {
    this.names = response;
    console.log(this.names)
  }
}