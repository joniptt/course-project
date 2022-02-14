import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private usuarioReq: UsuarioService) {}
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(7)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  sendForm() {
    this.isLoading = true;
    let cad: Usuario = this.signupForm.value;
    if (!this.signupForm.invalid) {
      this.usuarioReq.postData(cad).subscribe(
        (response) => {
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          error = console.log('Não foi possível realizar o cadastro');
          this.isLoading = false;
          this.varError = error.status;
        }
      );
    } else {
      this.isLoading = false;
      console.log('Formulário inválido!');
    }
  }
}
