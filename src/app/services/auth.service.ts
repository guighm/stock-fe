import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = "http://localhost:3000/auth/login";

  constructor(private readonly http: HttpClient) {}

  login(userLogin: Login) {
    return this.http.post<{access_token: string}>(this.API_URL, userLogin, {observe: 'response'});
  }

}
