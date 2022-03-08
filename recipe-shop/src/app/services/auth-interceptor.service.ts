import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from '../pages/login/login.service';

@Injectable()
export class AuthInterpceptorService implements HttpInterceptor {
  constructor(private loginService: LoginService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('id_token');
    if (idToken) {
      const clone = req.clone({
        headers: req.headers.set('Authorization', 'bearer ' + idToken),
      });
      return next.handle(clone).pipe(
        tap(
          (event: HttpEvent<any>) => {},
          (error: any) => {
            if (error instanceof HttpErrorResponse) {
              if (error.status == 401 || error.status == 403) {
                this.loginService.logout();
              }
            }
          }
        )
      );
    } else {
      return next.handle(req);
    }
  }
}
