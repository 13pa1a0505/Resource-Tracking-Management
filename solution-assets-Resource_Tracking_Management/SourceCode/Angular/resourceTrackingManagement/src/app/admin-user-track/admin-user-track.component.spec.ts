import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserTrackComponent } from './admin-user-track.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HeaderComponent } from '../header/header.component';

describe('AdminUserTrackComponent', () => {
  let component: AdminUserTrackComponent;
  let fixture: ComponentFixture<AdminUserTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserTrackComponent, HeaderComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,

      ],
      providers: [UserService, { provide: HttpClient }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});