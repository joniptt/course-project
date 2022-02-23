import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario-model';

interface AuthTokenResponse {
  sub: string;
  iat: string;
  exp: string;
}

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}

  cad(form: Usuario): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      'http://localhost:4000/usuarios/cadastrar',
      form
    );
  }

  login(form: Usuario): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(
      'http://localhost:4000/auth/login',
      form
    );
  }
  getData(): Observable<any> {
    return this.http.get<any>(' http://localhost:4000/usuarios');
  }
}
