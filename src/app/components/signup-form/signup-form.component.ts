import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsteriscoComponent } from "../asterisco/asterisco.component";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsteriscoComponent, ErrorMessageComponent, CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent implements OnInit {

  signupForm!: FormGroup;
  address!: FormGroup;
  newUser!: User;

  constructor(private readonly user: UserService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      address: new FormGroup({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', [Validators.required]),
      })
    })
  }

  cadastrarCliente() {
    this.newUser = this.signupForm.value;
    this.user.createUser(this.newUser).subscribe(
      (response) => {
        console.log(response.body);
      },
      (error) => {
        switch (error.status) {
          case (403):
            alert("E-mail e/ou nome de usuário já consta(m) na nossa base de dados!");
            break;
          default:
            alert("Desculpe, não foi possível realizar o seu cadastro! Tente novamente mais tarde!");
            break;
        }
      }
    );
  }

  signupControl(nome: string): FormControl {
    const control = this.signupForm.get(nome) as FormControl;
    if (!control) {
      throw new Error("Controle não encontrado!");
    }
    return control;
  }

  addressControl(nome: string): FormControl {
    const group = this.signupForm.get('address') as FormGroup;
    const control = group.get(nome) as FormControl;
    if (!control) {
      throw new Error("Controle não encontrado!");
    }
    return control;
  }

  cancelar() {
    this.signupForm.reset();
  }
}