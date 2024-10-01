import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.css'
})
export class MenuOptionComponent {
  @Input() name!: string;
  @Input() link!: string;
}