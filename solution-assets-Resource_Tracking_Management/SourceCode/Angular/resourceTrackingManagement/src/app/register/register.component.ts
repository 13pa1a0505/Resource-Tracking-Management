import { Component, OnInit } from '@angular/core';
import { UserService, TempUsers, Registration, RegistrationTechnologies } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
/* To Capture Registration Details of a User */
export class RegisterComponent implements OnInit {
  tempuser: TempUsers = new TempUsers("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  registration: Registration[];
 
  registrationList = JSON.parse(localStorage.getItem("register"));
  regList = JSON.parse(localStorage.getItem("register"));
  regtech : RegistrationTechnologies[];
  regtechList = JSON.parse(localStorage.getItem("regtechs"));
  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.UserService.getRegistrationFields().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.UserService.getRegistrationTechnology().subscribe(
      response => this.handleSuccessfulTechResponse(response),
    );

  }

  handleSuccessfulResponse(response) {
    this.registration = response;
    localStorage.setItem("register", JSON.stringify(this.registration));
  }

  handleSuccessfulTechResponse(response) {
    this.regtech = response;
    localStorage.setItem("regtechs", JSON.stringify(this.regtech));
  }

  /* Registers a User */
  createUser(gender, securityQue, techName): void {
    this.UserService.createUser(this.tempuser,gender, securityQue, techName)
      .subscribe(data => {
        alert("user registered successfully.");
        location.reload();
      });

  };

}