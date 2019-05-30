import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadUsersListComponent } from './lead-users-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('LeadUsersListComponent', () => {
  let component: LeadUsersListComponent;
  let fixture: ComponentFixture<LeadUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadUsersListComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,

      ],
      providers: [UserService, { provide: HttpClient }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
