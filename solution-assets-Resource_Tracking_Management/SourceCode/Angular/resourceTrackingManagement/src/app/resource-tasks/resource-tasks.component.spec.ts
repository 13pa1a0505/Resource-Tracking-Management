import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTasksComponent } from './resource-tasks.component';
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

describe('ResourceTasksComponent', () => {
  let component: ResourceTasksComponent;
  let fixture: ComponentFixture<ResourceTasksComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceTasksComponent, ResourceHeaderComponent],
      imports: [
        RouterTestingModule,
        FormsModule,

        HttpClientModule
      ],
      providers: [UserService, { provide: HttpClient }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
