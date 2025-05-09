import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from '../autor.service';
import { Autor } from '../autor.service';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.css'],
  standalone:false,
})
export class AutorFormComponent implements OnInit {
  autor: Autor = { codAu: 0, nome: '' };
  isEditing: boolean = false;

  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const codAu = Number(this.route.snapshot.paramMap.get('codAu'));
    if (codAu) {
      this.isEditing = true;
      this.autorService.buscarPorId(codAu).subscribe(
        (autor) => {
          if (autor) {
            this.autor = autor;
          } else {
            console.error('Autor não encontrado');
            this.router.navigate(['/autor']);
          }
        },
        (error) => {
          console.error('Erro ao buscar autor:', error);
        }
      );
    }
  }

  salvar(): void {
    if (this.isEditing) {
      this.autorService.salvar(this.autor).subscribe(
        () => {
          alert('Autor atualizado com sucesso!');
          this.router.navigate(['/autor']);
        },
        (error) => {
          console.error('Erro ao atualizar autor:', error);
        }
      );
    } else {
      this.autorService.salvar(this.autor).subscribe(
        () => {
          alert('Autor salvo com sucesso!');
          this.router.navigate(['/autor']);
        },
        (error) => {
          console.error('Erro ao salvar autor:', error);
        }
      );
    }
  }
}
