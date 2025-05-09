import { Component } from '@angular/core';
import { Livro, LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-list',
  standalone: false,
  templateUrl: './livro-list.component.html',
  styleUrl: './livro-list.component.css'
})
export class LivroListComponent {
  livros: Livro[] = [];

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.livroService.listar().subscribe(livros => {
      this.livros = livros;
    });
  }

  excluir(id: number): void {
    this.livroService.excluir(id).subscribe(() => {
      this.livros = this.livros.filter(livro => livro.codL !== id);
    });
  }

  editar(id: number): void {
    this.router.navigate(['/livro/editar', id]);
  }
}
