import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadHeaderComponent } from './lead-header.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('LeadHeaderComponent', () => {
  let component: LeadHeaderComponent;
  let fixture: ComponentFixture<LeadHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadHeaderComponent],
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
    fixture = TestBed.createComponent(LeadHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
