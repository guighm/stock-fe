import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsteriscoComponent } from "../asterisco/asterisco.component";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsteriscoComponent, ErrorMessageComponent, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
  
  loginForm!: FormGroup;
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      key: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    console.log(this.loginForm.value);
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
