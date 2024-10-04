import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {}

  API_URL: string = "http://localhost:3000/user/signup";

  createUser(newUser: User) {
    return this.http.post<User>(this.API_URL, newUser, {observe: 'response'});
  }
}
