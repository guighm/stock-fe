  import { Component } from '@angular/core';
  import { RouterLink } from '@angular/router';
  import { SideOptionComponent } from "../side-option/side-option.component";
  import { FormsModule } from '@angular/forms';
  import { ProdutoService } from '../../services/produto.service';

  @Component({
    selector: 'app-pre-menu',
    standalone: true,
    imports: [RouterLink, SideOptionComponent, FormsModule],
    templateUrl: './pre-menu.component.html',
    styleUrl: './pre-menu.component.css'
  })
  export class PreMenuComponent {

    constructor(private produto: ProdutoService) {}

    aqui!: string;

    imprime() {
    }

  }
