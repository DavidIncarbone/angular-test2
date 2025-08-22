import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = true;
  APIKey = 'AIzaSyByE61RWoHz7XShZQhwE8FgezAgGtbsb0o';
  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`;
  signinUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`;
  user!: User | null;
  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
  }

  signUp(body: {}) {
    return this.http.post(this.signupUrl, body);
  }
  signIn(email: string, password: string) {
    return this.http.post(this.signinUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
  logout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
  }
}
