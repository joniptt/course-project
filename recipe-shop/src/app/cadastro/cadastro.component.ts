import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private usuarioReq: UsuarioService) {}
  sendForm() {
    console.log(this.signupForm);
  }
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
}
