import { Component, OnInit } from '@angular/core';
import { UserService, Users } from '../service/user.service';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
/* To display Admin Profile Card in Admin Profile */
export class AdminProfileComponent implements OnInit {

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
