import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario-model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}

  cad(form: Usuario): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      environment.apiKey + 'cadastrar',
      form
    );
  }
  getData(): Observable<any> {
    return this.http.get<any>(environment.apiKey + 'usuarios');
  }
}
