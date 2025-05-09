import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface FormaCompra {
  codFc: number;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormaCompraService {
  private apiUrl = 'http://localhost:5029';
  constructor(private http: HttpClient) {}

  listar(): Observable<FormaCompra[]> {
    return this.http.get<FormaCompra[]>(`${this.apiUrl}/api/FormaCompra/buscarTodos`);
  }

  buscarPorId(codFc: number): Observable<FormaCompra> {
    return this.http.get<FormaCompra>(`${this.apiUrl}/api/FormaCompra/buscarPorId/${codFc}`);;
}


  salvar(formaCompra: FormaCompra): Observable<void> {
    if (formaCompra.codFc) {
      return this.http.put<void>(`${this.apiUrl}/api/FormaCompra/atualizar/${formaCompra.codFc}`, formaCompra);
    } else {
      return this.http.post<void>(`${this.apiUrl}/api/FormaCompra/criar`, formaCompra);
    }
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/FormaCompra/remover/${id}`);
  }
}
