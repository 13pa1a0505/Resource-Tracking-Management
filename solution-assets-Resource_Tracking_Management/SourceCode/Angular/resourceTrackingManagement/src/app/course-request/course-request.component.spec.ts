import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadHeaderComponent } from '../lead-header/lead-header.component';
import { CourseRequestComponent } from './course-request.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('CourseRequestComponent', () => {
  let component: CourseRequestComponent;
  let fixture: ComponentFixture<CourseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseRequestComponent, LeadHeaderComponent],
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
    fixture = TestBed.createComponent(CourseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CourseRequestComponent component', () => {
    expect(component).toBeTruthy();
  });
});