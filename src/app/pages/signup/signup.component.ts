import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SignupFormComponent } from "../../components/signup-form/signup-form.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SignupFormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
