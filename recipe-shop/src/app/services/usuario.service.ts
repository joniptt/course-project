import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario-model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}
  postData(form: Usuario) {
    return this.http.post(' http://localhost:3000/usuarios', form);
  }
  getData() {
    return this.http
      .get(' http://localhost:3000/usuarios')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
