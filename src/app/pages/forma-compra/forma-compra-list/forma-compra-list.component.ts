import { Component, OnInit } from '@angular/core';
import { FormaCompra, FormaCompraService } from '../forma-compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-compra-list',
  templateUrl: './forma-compra-list.component.html',
  standalone:false,
})
export class FormaCompraListComponent implements OnInit {
  formaCompras: FormaCompra[] = [];

  constructor(private formaCompraService: FormaCompraService, private router: Router) {}

  ngOnInit(): void {
    this.formaCompraService.listar().subscribe(formaCompras => {
      this.formaCompras = formaCompras;
    });
  }

  excluir(id: number): void {
    this.formaCompraService.excluir(id).subscribe(() => {
      this.formaCompras = this.formaCompras.filter(formaCompra => formaCompra.codFc !== id);
    });
  }

  editar(id: number): void {
    this.router.navigate(['/forma-compra/editar', id]);
  }
}
