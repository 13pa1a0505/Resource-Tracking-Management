import { Component, OnInit } from '@angular/core';
import { UserService, Technologies } from '../service/user.service';
@Component({
  selector: 'app-resource-technologies',
  templateUrl: './resource-technologies.component.html',
  styleUrls: ['./resource-technologies.component.css']
})
/* To display Technology Stack to resource */
export class ResourceTechnologiesComponent implements OnInit {

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