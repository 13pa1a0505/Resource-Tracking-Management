import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadHeaderComponent } from '../lead-header/lead-header.component';

import { LeadTasksComponent } from './lead-tasks.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('LeadTasksComponent', () => {
  let component: LeadTasksComponent;
  let fixture: ComponentFixture<LeadTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadTasksComponent, LeadHeaderComponent],
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
    fixture = TestBed.createComponent(LeadTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LeadTasks Component', () => {
    expect(component).toBeTruthy();
  });


});
