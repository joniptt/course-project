import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario-model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;
  error = null;
  varError = '';
  constructor(private usuarioReq: UsuarioService, private route: Router) {}
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
  toLogin() {
    this.route.navigate(['login']);
  }
  sendForm() {
    this.isLoading = true;
    let cad: Usuario = this.signupForm.value;
    if (!this.signupForm.invalid) {
      this.usuarioReq.cad(cad).subscribe(
        (response) => {
          this.isLoading = false;
          this.signupForm.reset();
          this.route.navigate['/login'];
          console.log(response);
        },
        (error) => {
          error = console.log('Não foi possível realizar o cadastro');
          this.isLoading = false;
          this.signupForm.reset();
          this.varError = error;
          alert('Não foi possível realizar o cadastro no servidor!');
        }
      );
    } else {
      this.isLoading = false;
      alert('Formulário inválido');
      console.log('Formulário inválido!');
    }
  }
}
