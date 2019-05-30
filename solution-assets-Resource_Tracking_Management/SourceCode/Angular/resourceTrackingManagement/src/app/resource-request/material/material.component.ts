import { Component, OnInit } from '@angular/core';
import { UserService, Requests } from '../../service/user.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
/* To Capture a Material Request by Resource */
export class MaterialComponent implements OnInit {

  request: Requests = new Requests("", "", "", "", "", "", "", "", "", "", "", "", "", "");
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  /* To Raise a Material Request */
  MaterialRequest(): void {
    this.UserService.MaterialRequest(this.request)
      .subscribe(data => {
        alert("Material Request submitted successfully.");
        console.log(this.request);
        location.reload();
      });
  };

}