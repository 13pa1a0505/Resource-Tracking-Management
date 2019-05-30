import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AdminUserTrackComponent } from '../admin-user-track/admin-user-track.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { HttpClient } from 'selenium-webdriver/http';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      FormsModule,
      HttpClientModule
    ],
    providers:[UserService,{provide:HttpClient}]
    
  }));

  it(`should be created`, () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});

