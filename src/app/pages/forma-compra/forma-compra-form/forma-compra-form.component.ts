import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaCompraService } from '../forma-compra.service';
import { FormaCompra } from '../forma-compra.service';

@Component({
  selector: 'app-forma-compra-form',
  templateUrl: './forma-compra-form.component.html',
  styleUrls: ['./forma-compra-form.component.css'],
  standalone:false,
})
export class FormaCompraFormComponent implements OnInit {
  formaCompra: FormaCompra = { codFc: 0, descricao: '' };
  isEditing: boolean = false;

  constructor(
    private formaCompraService: FormaCompraService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const codFc = Number(this.route.snapshot.paramMap.get('codFc'));
    if (codFc) {
      this.isEditing = true;
      this.formaCompraService.buscarPorId(codFc).subscribe(
        (formaCompra) => {
          if (formaCompra) {
            this.formaCompra = formaCompra;
          } else {
            console.error('Forma Compra não encontrado');
            this.router.navigate(['/forma-compra']);
          }
        },
        (error) => {
          console.error('Erro ao buscar forma compra:', error);
        }
      );
    }
  }

  salvar(): void {
    if (this.isEditing) {
      this.formaCompraService.salvar(this.formaCompra).subscribe(
        () => {
          alert('Forma Compra atualizado com sucesso!');
          this.router.navigate(['/forma-compra']);
        },
        (error) => {
          console.error('Erro ao atualizar forma compra:', error);
        }
      );
    } else {
      this.formaCompraService.salvar(this.formaCompra).subscribe(
        () => {
          alert('Forma Compra salvo com sucesso!');
          this.router.navigate(['/forma-compra']);
        },
        (error) => {
          console.error('Erro ao salvar forma compra:', error);
        }
      );
    }
  }
}
