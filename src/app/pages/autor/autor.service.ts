import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Autor {
  codAu: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private apiUrl = 'http://localhost:5029';
  constructor(private http: HttpClient) {}

  listar(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.apiUrl}/api/Autor/buscarTodos`);
  }

  buscarPorId(codAu: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/api/Autor/buscarPorId/${codAu}`);;
}


  salvar(autor: Autor): Observable<void> {
    if (autor.codAu) {
      return this.http.put<void>(`${this.apiUrl}/api/Autor/atualizar/${autor.codAu}`, autor);
    } else {
      return this.http.post<void>(`${this.apiUrl}/api/Autor/criar`, autor);
    }
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Autor/remover/${id}`);
  }
}
