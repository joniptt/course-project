import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario-model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}
  cad(form: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'http://localhost:3000/usuarios/cadastrar',
      form
    );
  }
  login(form: {
    email: string;
    password: string;
  }): Observable<{ email: string; password: string }> {
    return this.http.post<{ email: string; password: string }>(
      'http://localhost:3000/auth/login',
      form
    );
  }
  getData(): Observable<any> {
    return this.http.get<any>(' http://localhost:3000/usuarios');
  }
}
