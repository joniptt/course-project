import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mouse } from '../models/mouse.model';
import { PlacaMae } from '../models/placa-mae.model';
import { Processador } from '../models/processador.model';
import { Produtos } from '../models/produtos';
import { Teclado } from '../models/teclado.model';

@Injectable({
  providedIn: 'root',
})
export class PecasService {
  constructor(private http: HttpClient) {}

  getPecas(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(environment.apiKey + 'produtos');
  }

  getPlacaMae(): Observable<PlacaMae[]> {
    return this.http.get<PlacaMae[]>(environment.apiKey + '/placa-mae');
  }

  getMouse(): Observable<Mouse[]> {
    return this.http.get<Mouse[]>('http://localhost:4000/mouse');
  }
  getTeclado(): Observable<Teclado[]> {
    return this.http.get<Teclado[]>('http://localhost:4000/teclado');
  }

  getProcessador(): Observable<Processador[]> {
    return this.http.get<Processador[]>(
      'http://localhost:4000/produtos/processador'
    );
  }
}
