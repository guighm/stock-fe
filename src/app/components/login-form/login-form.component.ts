import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsteriscoComponent } from "../asterisco/asterisco.component";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { CommonModule } from '@angular/common';
import { Login } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsteriscoComponent, ErrorMessageComponent, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  userLogin!: Login;

  constructor(private readonly auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usernameOrEmail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    this.userLogin = this.loginForm.value;
    console.log(this.userLogin);
    this.auth.login(this.userLogin).subscribe(
      (response) => {
        if (response.body && response.body.access_token) {
          localStorage.setItem('jwt', response.body.access_token);
        } else {
          console.error("Token não recebido!");
        }
      },
      (error) => {
        switch (error.status) {
          case (404):
            alert("Não existe usuário com a credencial passada!");
            break;
          case (401):
            alert("Senha e/ou credencial incorreta(s)!");
            break;
          default:
            alert("Desculpe, não foi possível realizar o seu login! Tente novamente mais tarde!");
            break;
        }

      }
    );
  }

  loginControl(nome: string): FormControl {
    const control = this.loginForm.get(nome) as FormControl;
    if (!control) {
      throw new Error("Controle não encontrado!");
    }
    return control;
  }

  cancelar() {
    this.loginForm.reset();
  }
}
