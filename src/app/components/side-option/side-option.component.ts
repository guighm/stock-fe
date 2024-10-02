import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-side-option',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './side-option.component.html',
  styleUrl: './side-option.component.css'
})
export class SideOptionComponent implements OnInit {
  isLoggedIn !: boolean;

  ngOnInit(): void {
    this.isLoggedIn = false;
  }
}