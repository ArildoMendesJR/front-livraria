import { Component, OnInit } from '@angular/core';
import { Assunto, AssuntoService } from '../assunto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assunto-list',
  templateUrl: './assunto-list.component.html',
  standalone:false,
})
export class AssuntoListComponent implements OnInit {
  assuntos: Assunto[] = [];

  constructor(private assuntoService: AssuntoService, private router: Router) {}

  ngOnInit(): void {
    this.assuntoService.listar().subscribe(assuntos => {
      this.assuntos = assuntos;
    });
  }

  excluir(id: number): void {
    this.assuntoService.excluir(id).subscribe(() => {
      this.assuntos = this.assuntos.filter(assunto => assunto.codAs !== id);
    });
  }

  editar(id: number): void {
    this.router.navigate(['/assunto/editar', id]);
  }
}
