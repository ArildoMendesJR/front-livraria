import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Assunto {
  codAs: number;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {
  private apiUrl = 'http://localhost:5029';
  constructor(private http: HttpClient) {}

  listar(): Observable<Assunto[]> {
    return this.http.get<Assunto[]>(`${this.apiUrl}/api/Assunto/buscarTodos`);
  }

  buscarPorId(codAs: number): Observable<Assunto> {
    return this.http.get<Assunto>(`${this.apiUrl}/api/Assunto/buscarPorId/${codAs}`);;
}


  salvar(assunto: Assunto): Observable<void> {
    if (assunto.codAs) {
      return this.http.put<void>(`${this.apiUrl}/api/Assunto/atualizar/${assunto.codAs}`, assunto);
    } else {
      return this.http.post<void>(`${this.apiUrl}/api/Assunto/criar`, assunto);
    }
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Assunto/remover/${id}`);
  }
}
