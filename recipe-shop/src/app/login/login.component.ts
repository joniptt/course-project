import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: Usuario;
  constructor() {}
  getUsuario() {}
  ngOnInit(): void {}
}
