import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserApprovalsComponent } from './admin-user-approvals.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HeaderComponent } from '../header/header.component';


describe('AdminUserApprovalsComponent', () => {
  let component: AdminUserApprovalsComponent;
  let fixture: ComponentFixture<AdminUserApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserApprovalsComponent, HeaderComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [UserService, { provide: HttpClient }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create admin-user-approval component', () => {
    expect(component).toBeTruthy();
  });
});