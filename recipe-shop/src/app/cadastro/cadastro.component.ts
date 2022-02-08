import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario-model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastroForm: Usuario;
  constructor(private usuarioReq: UsuarioService) {}

  ngOnInit(): void {}
  cadastrar() {
    this.usuarioReq.envioForm(this.cadastroForm);
    console.log(this.cadastroForm);
  }
}
