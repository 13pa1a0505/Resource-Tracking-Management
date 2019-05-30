import { Component, OnInit } from '@angular/core';
import { UserService, Users } from '../service/user.service';


@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.css']
})
/* To Display Resource Profile Card */
export class ResourceProfileComponent implements OnInit {

  user: Users[];
  constructor(private UserService: UserService) { }

  ngOnInit() {

    this.UserService.getResourceProfile().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.user = response;
  }

}