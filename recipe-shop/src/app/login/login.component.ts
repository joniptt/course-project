import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  constructor(private route: Router, private getLogin: UsuarioService) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  submit() {
    let form = this.loginForm.value;
    this.isLoading = true;
    try {
      if (!this.loginForm.invalid) {
        this.getLogin.login(form).subscribe(
          (response) => {
            this.isLoading = false;
            this.loginForm.reset();
            alert('Login efetuado com sucesso!');
            console.log(response);
          },
          (error) => {
            this.isLoading = false;
            this.loginForm.reset();
            alert('Ocorreu um problema na hora de efetuar o login!');
            console.log(error);
          }
        );
      }
    } catch (error) {
      alert('Formulário inválido!');
    }
  }
  toSignUp() {
    this.route.navigate(['/cadastro']);
  }
}
