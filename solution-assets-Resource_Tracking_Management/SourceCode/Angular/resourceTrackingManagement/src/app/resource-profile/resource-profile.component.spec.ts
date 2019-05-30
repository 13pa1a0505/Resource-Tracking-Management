import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceProfileComponent } from './resource-profile.component';
import { NgModule } from '@angular/core';

import { Component, DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { ResourceHeaderComponent } from '../resource-header/resource-header.component';


describe('ResourceProfileComponent', () => {
  let component: ResourceProfileComponent;
  let fixture: ComponentFixture<ResourceProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceProfileComponent, ResourceHeaderComponent],
      imports: [
        RouterTestingModule,
        FormsModule,

        HttpClientModule
      ],
      providers: [UserService, { provide: HttpClient }]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
