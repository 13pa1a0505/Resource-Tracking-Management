import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceGrouptasksComponent } from './resource-grouptasks.component';
import { NgModule } from '@angular/core';
import { ResourceHeaderComponent } from '../resource-header/resource-header.component';

import { Component, DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

describe('ResourceGrouptasksComponent', () => {
  let component: ResourceGrouptasksComponent;
  let fixture: ComponentFixture<ResourceGrouptasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceGrouptasksComponent, ResourceHeaderComponent],
      imports: [
        RouterTestingModule,
        FormsModule,

        HttpClientModule
      ],
      providers: [UserService, { provide: HttpClient }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceGrouptasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
