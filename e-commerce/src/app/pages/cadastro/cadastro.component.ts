import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario-model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;
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
          console.log(response.message);
          alert(response.message);
          this.route.navigate['login'];
        },
        (error) => {
          this.isLoading = false;
          this.signupForm.reset();
          alert(error.message);
        }
      );
    } else {
      this.isLoading = false;
      alert('Formulário inválido');
    }
  }
}
