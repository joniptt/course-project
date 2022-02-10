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
    let form: Usuario = {
      name: this.signupForm.get('name').value,
      password: this.signupForm.get('password').value,
      email: this.signupForm.get('email').value,
    };
    if (this.signupForm.invalid) {
      console.log('Não foi possível enviar o formulário!');
    } else {
      this.usuarioReq.postData(form).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
