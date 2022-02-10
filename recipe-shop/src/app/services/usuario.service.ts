import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario-model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}
  postData(form: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:3000/usuarios', form);
  }
  getData() {
    return this.http
      .get(' http://localhost:3000/usuarios')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
