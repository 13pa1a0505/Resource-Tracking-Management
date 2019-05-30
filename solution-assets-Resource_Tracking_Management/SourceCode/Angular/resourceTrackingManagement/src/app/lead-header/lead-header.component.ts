import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-header',
  templateUrl: './lead-header.component.html',
  styleUrls: ['./lead-header.component.css']
})

/**provides logout functionality and dropdown for user logout function */
export class LeadHeaderComponent implements OnInit {
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
    alert("you are going to logout!")
    this.router.navigate(['']);
  }
  private badMethod(content) { }
}



