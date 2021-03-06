import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthUser } from './auth-user.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  user = new Subject<AuthUser>();
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
    const expireDate = new Date(new Date().getTime() + authRes.exp * 1000);
    const user = new AuthUser(authRes.token, authRes.exp, expireDate);
    this.user.next(user);
    localStorage.setItem('id_token', authRes.token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  expiredSession(timer: number) {
    setTimeout(() => {
      localStorage.removeItem('user');
    }, timer);
  }
  logout() {
    this.user.next(null);
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    localStorage.removeItem('recipes');
    localStorage.setItem('logged', 'false');
    this.route.navigate(['/login']);
  }
}
