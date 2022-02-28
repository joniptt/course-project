import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthUser } from './auth-user.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  user = new Subject<AuthUser>();
  private tokenExpTime: any;
  authenticated: boolean = false;

  constructor(private http: HttpClient, private route: Router) {}

  login(form: { email: string; password: string }): Observable<AuthUser> {
    return this.http
      .post<AuthUser>('http://localhost:4000/auth/login', form)
      .pipe(
        tap((res) => {
          this.loginSession(res);
        })
      );
  }

  loginSession(authRes: AuthUser) {
    const expirationTime = +authRes.decoded.exp - +authRes.decoded.iat;
    console.log(expirationTime);
    const expireDate = new Date(new Date().getTime() + expirationTime * 1000);
    console.log(expireDate);
    const user = new AuthUser(authRes.token, authRes.decoded, expireDate);
    this.autoLogout(expirationTime * 1000);
    this.user.next(user);
    this.authenticated = true;
    localStorage.setItem('id_token', authRes.token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  autoLogout(time: number) {
    this.tokenExpTime = setTimeout(() => {
      this.logout();
      this.authenticated = false;
      this.route.navigate(['/login']);
    }, time);
  }

  isAuth() {
    return this.authenticated;
  }

  logout() {
    this.user.next(null);
    this.authenticated = false;
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    clearTimeout(this.tokenExpTime);
    this.route.navigate(['/login']);
  }

  autoLogin() {
    const userSaved = localStorage.getItem(JSON.parse('user'));
    if (!userSaved) {
    }
  }
}
