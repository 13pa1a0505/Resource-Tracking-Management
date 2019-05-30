import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Directive, Input, ViewChild } from '@angular/core';
import { GroupCreationComponent } from './group-creation.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HeaderComponent } from '../header/header.component';
import { By } from '@angular/platform-browser';

describe('GroupCreationComponent', () => {
  let component: GroupCreationComponent;
  let fixture: ComponentFixture<GroupCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupCreationComponent, HeaderComponent],
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
    fixture = TestBed.createComponent(GroupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create group component', () => {
    expect(component).toBeTruthy();
  });


  it('should have input text field  as Group Name', () => {
    const fixture = TestBed.createComponent(GroupCreationComponent);

    const fnameElement = fixture.debugElement.query(By.css('input[id=txtGroupName]'));
  });

  it('should have input text field  as "Lead"', () => {
    const fixture = TestBed.createComponent(GroupCreationComponent);
    const fnameElement = fixture.debugElement.query(By.css('input[id=txtLead ]'));
  });
  it('should have input text field  as Resource Number', () => {
    const fixture = TestBed.createComponent(GroupCreationComponent);

    const fnameElement = fixture.debugElement.query(By.css('input[id=txtResourceNumber]'));
  });

  it('should have input text field  as "Start Date"', () => {
    const fixture = TestBed.createComponent(GroupCreationComponent);

    const fnameElement = fixture.debugElement.query(By.css('input[id=txtStartDate]'));
  });
  it('should have input text field  as "End Date"', () => {
    const fixture = TestBed.createComponent(GroupCreationComponent);

    const fnameElement = fixture.debugElement.query(By.css('input[id=txtEndDate]'));
  });

  it('should have input text field  as "Start Date"', () => {
    const fixture = TestBed.createComponent(GroupCreationComponent);

    const fnameElement = fixture.debugElement.query(By.css('input[id=txtResourceNumber]'));
  });


});
