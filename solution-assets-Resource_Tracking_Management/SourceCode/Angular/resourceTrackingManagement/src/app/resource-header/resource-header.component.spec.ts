import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceHeaderComponent } from './resource-header.component';
import { NgModule } from '@angular/core';

import { Component, DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

describe('ResourceHeaderComponent', () => {
  let component: ResourceHeaderComponent;
  let fixture: ComponentFixture<ResourceHeaderComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceHeaderComponent],
      imports: [
        RouterTestingModule,
        FormsModule,

        HttpClientModule
      ],
      providers: [UserService, { provide: HttpClient }]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
