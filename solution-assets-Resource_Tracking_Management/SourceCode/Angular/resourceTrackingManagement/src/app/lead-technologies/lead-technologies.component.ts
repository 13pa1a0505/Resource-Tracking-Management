import { Component, OnInit } from '@angular/core';
import { UserService, Technologies } from '../service/user.service';

@Component({
  selector: 'app-lead-technologies',
  templateUrl: './lead-technologies.component.html',
  styleUrls: ['./lead-technologies.component.css']
})
/* To dispaly Technology Stack to Lead */
export class LeadTechnologiesComponent implements OnInit {

  technology: Technologies[];
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getTechnologies().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.technology = response;
  }
}