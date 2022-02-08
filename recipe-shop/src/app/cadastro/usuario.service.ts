import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario-model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}

  envioForm(form: Usuario) {
    this.http
      .post('http://localhost:3000/usuarios', form)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
