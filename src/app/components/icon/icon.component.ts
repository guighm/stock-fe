import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() link!: string;
  @Input() name!: string;
  @Input() tooltip!: string;
}