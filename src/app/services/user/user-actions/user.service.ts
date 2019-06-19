import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Injectable } from '@angular/core';
import { SharedModule } from '../../../common/shared.module';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

  constructor(private http: HttpClient, public shared: SharedModule) { }
  baseUrl: string = this.shared.getBaseUrl();
  
  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users');
  }
  getUserDetails(id): Observable<any> {
    return this.http.get(this.baseUrl + 'users/' + id);
  }
  updateUser(userPayload, id): Observable<any> {
    return this.http.put(this.baseUrl + 'users/' + id, userPayload);
   }
   deleteUser(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'users/' + id);
   }
 
}