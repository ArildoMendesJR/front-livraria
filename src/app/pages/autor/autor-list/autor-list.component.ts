import { Component, OnInit } from '@angular/core';
import { Autor, AutorService } from '../autor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  standalone:false,
})
export class AutorListComponent implements OnInit {
  autores: Autor[] = [];

  constructor(private autorService: AutorService, private router: Router) {}

  ngOnInit(): void {
    this.autorService.listar().subscribe(autores => {
      this.autores = autores;
    });
  }

  excluir(id: number): void {
    this.autorService.excluir(id).subscribe(() => {
      this.autores = this.autores.filter(autor => autor.codAu !== id);
    });
  }

  editar(id: number): void {
    this.router.navigate(['/autor/editar', id]);
  }
}
