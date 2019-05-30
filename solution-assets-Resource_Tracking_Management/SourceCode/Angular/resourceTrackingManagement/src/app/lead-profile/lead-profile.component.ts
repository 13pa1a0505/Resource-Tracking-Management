import { Component, OnInit } from '@angular/core';
import { UserService, Users } from '../service/user.service';

@Component({
  selector: 'app-lead-profile',
  templateUrl: './lead-profile.component.html',
  styleUrls: ['./lead-profile.component.css']
})
/* To dispaly Lead Prg=file Card in Lead DashBoard*/
export class LeadProfileComponent implements OnInit {

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