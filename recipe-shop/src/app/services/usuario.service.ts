import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario-model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}
  cad(form: Usuario): Observable<Usuario> {
    return this.http.post<any>(
      'http://localhost:3000/usuarios/cadastrar',
      form
    );
  }
  login(form: any): Observable<any> {
    return this.http.post<Usuario>('http://localhost:3000/usuarios', {
      params: form,
    });
  }
  getData(): Observable<any> {
    return this.http.get<any>(' http://localhost:3000/usuarios');
  }
}
