import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ProcessHttpmsgService } from './../services/process-httpmsg.service';
/* import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'; */

const API_URL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private processHttpMsgService: ProcessHttpmsgService) { }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    let username = 'test01';
    let password = 'abc123';
    let paramText = 'login?username=' + username + '&password=' + password;
    return this.http.post(API_URL + paramText,'', httpOptions);
  }

  loginUser(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    
    let paramText = 'login?username=' + username + '&password=' + password;
    return this.http.post(API_URL + paramText,'', httpOptions);
  }
}
