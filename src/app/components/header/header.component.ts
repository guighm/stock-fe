import { Component } from '@angular/core';
import { MenuOptionComponent } from '../menu-option/menu-option.component';
import { PreMenuComponent } from "../pre-menu/pre-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuOptionComponent, PreMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
