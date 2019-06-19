
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { SharedModule } from '../../../common/shared.module';
@Injectable({
    providedIn: 'root'
  })
export class AuthService {

  constructor(private http: HttpClient, public shared: SharedModule) { }
  baseUrl: string = this.shared.getBaseUrl();

  login(loginPayload): Observable<any> {
   return this.http.get(this.baseUrl + 'users/' + loginPayload.email);
  }
  signup(signupPayload, id): Observable<any> {
   return this.http.post(this.baseUrl + 'users/' + id, signupPayload);
  }
}