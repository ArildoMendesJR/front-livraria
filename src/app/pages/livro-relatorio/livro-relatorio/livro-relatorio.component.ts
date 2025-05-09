import { Component, OnInit } from '@angular/core';
import { LivroRelatorioService } from '../livro-relatorio.service';
import { LivroRelatorio } from '../livro-relatorio.model';

@Component({
  selector: 'app-livro-relatorio',
  standalone: false,
  templateUrl: './livro-relatorio.component.html',
  styleUrl: './livro-relatorio.component.css'
})
export class LivroRelatorioComponent implements OnInit {
  agrupadoPorAutor: { [autor: string]: LivroRelatorio[] } = {};

  constructor(private relatorioService: LivroRelatorioService) {}

  ngOnInit(): void {
    this.relatorioService.obterRelatorio().subscribe((dados) => {
      this.agrupadoPorAutor = this.agruparPorAutor(dados);
    });
  }

  private agruparPorAutor(dados: LivroRelatorio[]): { [autor: string]: LivroRelatorio[] } {
    return dados.reduce((acc, item) => {
      acc[item.autor] = acc[item.autor] || [];
      acc[item.autor].push(item);
      return acc;
    }, {} as { [autor: string]: LivroRelatorio[] });
  }
}
