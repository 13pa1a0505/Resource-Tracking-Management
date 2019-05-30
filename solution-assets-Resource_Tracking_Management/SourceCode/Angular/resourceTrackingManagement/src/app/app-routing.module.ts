import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminUserApprovalsComponent } from './admin-user-approvals/admin-user-approvals.component';
import { LeadUsersListComponent } from './lead-users-list/lead-users-list.component';
import { LoginComponent } from './login/login.component';
import { AdminUserTrackComponent } from './admin-user-track/admin-user-track.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { LeadTasksComponent } from './lead-tasks/lead-tasks.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { CourseRequestComponent } from './course-request/course-request.component';
import { LeadTechnologiesComponent } from './lead-technologies/lead-technologies.component';
import { ResourceRequestComponent } from './resource-request/resource-request.component';
import { ResourceTasksComponent } from './resource-tasks/resource-tasks.component';
import { LeaveComponent } from './resource-request/leave/leave.component';
import { MaterialComponent } from './resource-request/material/material.component';
import { CourseComponent } from './resource-request/course/course.component';
import { ResourceTechnologiesComponent } from './resource-technologies/resource-technologies.component';
import { ResourceHeaderComponent } from './resource-header/resource-header.component';
import { RouterGuardService } from './service/router-guard.service';
import { HeaderComponent } from './header/header.component';
import { LeadHeaderComponent } from './lead-header/lead-header.component';
import { ErrorComponent } from './error/error.component';
import { ResourceProfileComponent } from './resource-profile/resource-profile.component';
import { LeadProfileComponent } from './lead-profile/lead-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ResourceGrouptasksComponent } from './resource-grouptasks/resource-grouptasks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminapprovals', component: AdminUserApprovalsComponent },
  { path: 'usertrack', component: AdminUserTrackComponent },
  { path: 'leadusers', component: LeadUsersListComponent },
  { path: 'creategroup', component: GroupCreationComponent },
  { path: 'techstack', component: TechnologiesComponent },
  { path: 'MyTeam', component: LeadUsersListComponent },
  { path: 'CourseRequest', component: CourseRequestComponent },
  { path: 'AssigningTask', component: LeadTasksComponent },
  { path: 'TaskStatus', component: TaskStatusComponent },
  { path: 'techstack', component: TechnologiesComponent },
  { path: 'leadtechstack', component: LeadTechnologiesComponent },
  { path: 'ResourceTaskStatus', component: ResourceTasksComponent },
  { path: 'Request', component: ResourceRequestComponent },
  { path: 'Leave', component: LeaveComponent },
  { path: 'CourseExtension', component: CourseComponent },
  { path: 'MaterialRequest', component: MaterialComponent },
  { path: 'ResourceTech', component: ResourceTechnologiesComponent },
  { path: 'user', component: ResourceHeaderComponent, canActivate: [RouterGuardService] },
  { path: 'admin', component: HeaderComponent, canActivate: [RouterGuardService] },
  { path: 'lead', component: LeadHeaderComponent, canActivate: [RouterGuardService] },
  { path: 'error', component: ErrorComponent },
  { path: 'profile', component: ResourceProfileComponent },
  { path: 'leadprofile', component: LeadProfileComponent },
  { path: 'adminprofile', component: AdminProfileComponent },
  { path: 'groupTasks', component: ResourceGrouptasksComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
