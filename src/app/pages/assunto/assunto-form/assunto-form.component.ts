import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssuntoService } from '../assunto.service';
import { Assunto } from '../assunto.service';

@Component({
  selector: 'app-assunto-form',
  templateUrl: './assunto-form.component.html',
  styleUrls: ['./assunto-form.component.css'],
  standalone:false,
})
export class AssuntoFormComponent implements OnInit {
  assunto: Assunto = { codAs: 0, descricao: '' };
  isEditing: boolean = false;

  constructor(
    private assuntoService: AssuntoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const codAs = Number(this.route.snapshot.paramMap.get('codAs'));
    if (codAs) {
      this.isEditing = true;
      this.assuntoService.buscarPorId(codAs).subscribe(
        (assunto) => {
          if (assunto) {
            this.assunto = assunto;
          } else {
            console.error('Assunto não encontrado');
            this.router.navigate(['/assunto']);
          }
        },
        (error) => {
          console.error('Erro ao buscar assunto:', error);
        }
      );
    }
  }

  salvar(): void {
    if (this.isEditing) {
      this.assuntoService.salvar(this.assunto).subscribe(
        () => {
          alert('Assunto atualizado com sucesso!');
          this.router.navigate(['/assunto']);
        },
        (error) => {
          console.error('Erro ao atualizar assunto:', error);
        }
      );
    } else {
      this.assuntoService.salvar(this.assunto).subscribe(
        () => {
          alert('Assunto salvo com sucesso!');
          this.router.navigate(['/assunto']);
        },
        (error) => {
          console.error('Erro ao salvar assunto:', error);
        }
      );
    }
  }
}
