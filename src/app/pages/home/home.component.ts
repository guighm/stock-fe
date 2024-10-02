import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ContainerComponent } from "../../components/container/container.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ContainerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}