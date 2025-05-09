import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroRelatorio } from './livro-relatorio.model';

@Injectable({
  providedIn: 'root',
})
export class LivroRelatorioService {
  private readonly apiUrl = 'http://localhost:5029';

  constructor(private http: HttpClient) {}

  obterRelatorio(): Observable<LivroRelatorio[]> {
    return this.http.get<LivroRelatorio[]>(`${this.apiUrl}/api/LivroRelatorio/livros`);
  }
}
