import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pecas } from '../models/pecas.model';

@Injectable({
  providedIn: 'root',
})
export class PecasService {
  constructor(private http: HttpClient) {}

  getPecas(): Observable<Pecas[]> {
    return this.http.get<Pecas[]>('http://localhost:4000/pecas');
  }

  getPlacaMãe(): Observable<Pecas> {
    return this.http.get<Pecas>('http://localhost:4000/placa-mae');
  }
}
