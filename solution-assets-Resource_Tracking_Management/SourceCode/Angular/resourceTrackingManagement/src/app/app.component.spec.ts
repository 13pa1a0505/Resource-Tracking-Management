import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AdminUserApprovalsComponent } from './admin-user-approvals/admin-user-approvals.component';
import { HomeComponent } from './home/home.component';
import { LeadUsersListComponent } from './lead-users-list/lead-users-list.component';
import { LoginComponent } from './login/login.component';
import { AdminUserTrackComponent } from './admin-user-track/admin-user-track.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { LeadHeaderComponent } from './lead-header/lead-header.component';
import { LeadTasksComponent } from './lead-tasks/lead-tasks.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { CourseRequestComponent } from './course-request/course-request.component';
import { LeadTechnologiesComponent } from './lead-technologies/lead-technologies.component';
import { ResourceHeaderComponent } from './resource-header/resource-header.component';
import { ResourceRequestComponent } from './resource-request/resource-request.component';
import { ResourceTasksComponent } from './resource-tasks/resource-tasks.component';
import { LeaveComponent } from './resource-request/leave/leave.component';
import { MaterialComponent } from './resource-request/material/material.component';
import { CourseComponent } from './resource-request/course/course.component';
import { UserService } from './service/user.service';
import { ResourceTechnologiesComponent } from './resource-technologies/resource-technologies.component';
import { ErrorComponent } from './error/error.component';
import { ResourceProfileComponent } from './resource-profile/resource-profile.component';
import { LeadProfileComponent } from './lead-profile/lead-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ResourceGrouptasksComponent } from './resource-grouptasks/resource-grouptasks.component';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule
      ],
      declarations: [
        AppComponent,
        RegisterComponent,
        HeaderComponent,
        AdminUserApprovalsComponent,
        HomeComponent,
        LeadUsersListComponent,
        LoginComponent,
        AdminUserTrackComponent,
        GroupCreationComponent,
        TechnologiesComponent,
        LeadHeaderComponent,
        LeadTasksComponent,
        TaskStatusComponent,
        CourseRequestComponent,
        LeadTechnologiesComponent,
        ResourceHeaderComponent,
        ResourceRequestComponent,
        ResourceTasksComponent,
        LeaveComponent,
        MaterialComponent,
        CourseComponent,
        ResourceTechnologiesComponent,
        ErrorComponent,
        ResourceProfileComponent,
        LeadProfileComponent,
        AdminProfileComponent,
        ResourceGrouptasksComponent,

      ],
    }).compileComponents();
  }));

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
})