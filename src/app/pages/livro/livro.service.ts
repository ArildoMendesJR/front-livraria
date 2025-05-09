/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Livro {
  codL: number;
  titulo: string;
  editora: string;
  edicao: string;
  anoPublicacao: Date;
  assuntos: any[];
  autores: any[];
  formasCompra: any[];
}

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private apiUrl = 'http://localhost:5029';
  constructor(private http: HttpClient) {}

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.apiUrl}/api/Livro/buscarTodos`);
  }

  buscarPorId(codL: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/api/Livro/buscarPorId/${codL}`);;
}


  salvar(livro: Livro): Observable<void> {
    if (livro.codL) {
      return this.http.put<void>(`${this.apiUrl}/api/Livro/atualizar/${livro.codL}`, livro);
    } else {
      return this.http.post<void>(`${this.apiUrl}/api/Livro/criar`, livro);
    }
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Livro/remover/${id}`);
  }
}

