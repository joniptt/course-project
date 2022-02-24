import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterpceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('id_token');
    if (idToken) {
      const clone = req.clone({
        headers: req.headers.set('Authorization', 'bearer ' + idToken),
      });
      return next.handle(clone);
    } else {
      return next.handle(req);
    }
  }
}
