import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/**provides logout functionality and dropdown for user logout function */
export class HeaderComponent implements OnInit {
  name = "";
  access = "";
  closeResult: string;
  uname: string;
  ngOnInit() {
    this.uname = sessionStorage.getItem("username");
  }


  constructor(private modalService: NgbModal, private router: Router) {
    this.access = sessionStorage.getItem("access");
    this.name = sessionStorage.getItem("name");
  }
  cond(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });

  }
  /**function for logout of the session */
  logoutFunc() {
    alert("You are going to logout!");
    this.router.navigate(['']);
  }
  private badMethod(content) { }
}