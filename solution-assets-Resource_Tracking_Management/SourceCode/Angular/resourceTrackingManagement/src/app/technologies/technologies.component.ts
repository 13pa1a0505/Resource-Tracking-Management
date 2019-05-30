import { Component, OnInit } from '@angular/core';
import { UserService, Technologies } from '../service/user.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
/* To capture updations done by Admin on Technology Stack */
export class TechnologiesComponent implements OnInit {
  technologies: Technologies[];
  technology: Technologies = new Technologies("", "", "", "")
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getTechnologies().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.technologies = response;
  }
  /* To add/Update a Link by admin in Technology Stack */
  addlink(): void {
    console.log(this.technology);
    this.UserService.addlink(this.technology)
      .subscribe(data => {
        alert("Link added successfully.");
        console.log(this.technology);
        location.reload();
      });
  };
  /* To delete a link from technology stack by admin */
  deleteLink(technologyId): void {
    let val = technologyId;
    console.log("ui ------------" + val);
    this.UserService.deleteLink(val)
      .subscribe( data => {
        alert("Link deleted successfully.");
        location.reload();
      })
  };
}