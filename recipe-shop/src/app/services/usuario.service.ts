import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario-model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}

  cad(form: Usuario): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      'http://localhost:4000/usuarios/cadastrar',
      form
    );
  }
  getData(): Observable<any> {
    return this.http.get<any>(' http://localhost:4000/usuarios');
  }
}
