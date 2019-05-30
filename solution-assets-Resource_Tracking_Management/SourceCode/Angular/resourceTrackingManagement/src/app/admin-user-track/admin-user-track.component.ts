import { Component, OnInit } from '@angular/core';
import { UserService, TempUsers } from '../service/user.service';


@Component({
  selector: 'app-admin-user-track',
  templateUrl: './admin-user-track.component.html',
  styleUrls: ['./admin-user-track.component.css']
})
/* To Track Registered Users by Admin */
export class AdminUserTrackComponent implements OnInit {

  TempUsers: TempUsers[];
  constructor(private httpClientService: UserService) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.TempUsers = response;
  }

}
