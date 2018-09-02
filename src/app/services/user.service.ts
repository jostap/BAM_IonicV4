import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) { }

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
}
