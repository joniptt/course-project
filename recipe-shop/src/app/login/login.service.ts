import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthUser } from './auth-user.model';

@Injectable()
export class LoginService {
  user = new Subject<AuthUser>();

  constructor(private http: HttpClient) {}

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
    localStorage.setItem('id_token', authRes.token);
    const expireDate = new Date(
      new Date().getTime() + +authRes.decoded.exp * 1000
    );
    const user = new AuthUser(authRes.token, authRes.decoded, expireDate);
    localStorage.setItem('user', JSON.stringify(user));
    this.user.next(user);
  }

  logout() {
    this.user.next(null);
  }
}
