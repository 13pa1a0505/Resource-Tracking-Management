import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe } from '@angular/core';
import { TechnologiesComponent } from './technologies.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologiesComponent, HeaderComponent],
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
    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
