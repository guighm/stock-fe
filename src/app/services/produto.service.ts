import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private readonly http: HttpClient) {}

  API_URL: string = "http://localhost:3000";

  procurarProduto() {
    return this.http.get<any>(this.API_URL);
  }
}
