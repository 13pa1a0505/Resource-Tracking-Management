import { Injectable } from '@angular/core';
import { ValidationService } from './validation.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**Determine role of user login is admin or user */
export class LoginAuthenticationService {
  username = "";
  accessType = "";
  match;
  constructor(public validationService: ValidationService, private router: Router) { }
  ngOnInit() { }
  /**
   * check whether loggedin user is admin or user and redirect as required
   * @param uname 
   * @param password 
   */
  isUserLoggedIn(uname, password) {
    console.log(uname);
    console.log(password);

    this.validationService.loginvalidation(uname, password).subscribe((res) => {
      if (res == "Resource") {
        sessionStorage.setItem("access", res);
        sessionStorage.setItem("match", "true");
        sessionStorage.setItem("username", uname);
        this.accessType = res;
        this.router.navigate(['user']);
      }
      else if (res == "Admin") {
        sessionStorage.setItem("access", res);
        sessionStorage.setItem("match", "true");
        sessionStorage.setItem("username", uname);
        this.accessType = res;
        this.router.navigate(['admin']);
      }
      else if (res == "Lead") {
        sessionStorage.setItem("access", res);
        sessionStorage.setItem("match", "true");
        sessionStorage.setItem("username", uname);
        this.accessType = res;
        this.router.navigate(['lead']);
      }
      else {
        console.log("Enter the right credentials");
        this.router.navigate(['error']);
        sessionStorage.setItem("inavlid credentials", "true");
      }
    });



  }
}
