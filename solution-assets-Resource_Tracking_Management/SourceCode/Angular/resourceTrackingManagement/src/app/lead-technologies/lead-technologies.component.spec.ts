import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTechnologiesComponent } from './lead-technologies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

describe('LeadTechnologiesComponent', () => {
  let component: LeadTechnologiesComponent;
  let fixture: ComponentFixture<LeadTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadTechnologiesComponent, HeaderComponent],
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
    fixture = TestBed.createComponent(LeadTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
