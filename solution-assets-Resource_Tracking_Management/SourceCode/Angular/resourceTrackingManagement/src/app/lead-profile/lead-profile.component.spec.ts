import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadHeaderComponent } from '../lead-header/lead-header.component';

import { LeadProfileComponent } from './lead-profile.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('LeadProfileComponent', () => {
  let component: LeadProfileComponent;
  let fixture: ComponentFixture<LeadProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadProfileComponent, LeadHeaderComponent],
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
    fixture = TestBed.createComponent(LeadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LeadProfile Component ', () => {
    expect(component).toBeTruthy();
  });
});
