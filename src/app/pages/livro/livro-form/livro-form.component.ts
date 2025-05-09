import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutorService } from '../../autor/autor.service';
import { AssuntoService } from '../../assunto/assunto.service';
import { FormaCompraService } from '../../forma-compra/forma-compra.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css'],
  standalone:false,
})
export class LivroFormComponent implements OnInit {
  livroForm: FormGroup;
  assuntos: any[] = [];
  autores: any[] = [];
  formasCompraDisponiveis: any[] = [];
  
  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router,
    private autorService: AutorService,
    private assuntoService: AssuntoService,
    private formaCompraService: FormaCompraService,
  ) {

    
    function formArrayNotEmpty(control: AbstractControl): ValidationErrors | null {
      const formArray = control as any;
      return formArray && formArray.length > 0 ? null : { required: true };
    }
    
    this.livroForm = this.fb.group({
      codL: 0,
      titulo: ['', [Validators.required]],
      editora: ['', [Validators.required]],
      edicao: [0, [Validators.required]],
      anoPublicacao: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]], 
      assuntos: [[], [Validators.required]], 
      autores: [[], [Validators.required]], 
      formasCompra: this.fb.array([], [formArrayNotEmpty])
    });
  }
  
  ngOnInit(): void {

    this.autorService.listar().subscribe(autores => {
      this.autores = autores;
    });

    this.assuntoService.listar().subscribe(assuntos => {
      this.assuntos = assuntos;
    });

    this.formaCompraService.listar().subscribe(formas => {
      this.formasCompraDisponiveis = formas;
    });

    const livroId = Number(this.route.snapshot.paramMap.get('codL'));
    if (livroId) {
      this.livroService.buscarPorId(livroId).subscribe(livro => {
        this.livroForm.patchValue({
          codL: livro.codL,
          titulo: livro.titulo,
          editora: livro.editora,
          edicao: livro.edicao,
          anoPublicacao: livro.anoPublicacao,
          assuntos: livro.assuntos || [],
          autores: livro.autores || [],
        });

        const formasCompra = livro.formasCompra || [];
        formasCompra.forEach(forma => {
          this.adicionarFormaCompra();
          this.formasCompra.controls[this.formasCompra.length - 1].patchValue(forma);
        });
      });
  }
}
  get formasCompra() {
    return this.livroForm.get('formasCompra') as FormArray;
  }
  
  adicionarFormaCompra() {
    this.formasCompra.push(this.fb.group({
      codFc: [''],
      valor: [0]
    }));
  }
  
  removerFormaCompra(index: number) {
    this.formasCompra.removeAt(index);
  }
  
  salvar() {
    const livroDTO = this.livroForm.value;
    this.livroService.salvar(livroDTO).subscribe(
      () => {
        this.router.navigate(['/livro']);
      },
      (error) => {
        console.error('Erro ao salvar o livro:', error);
      }
    );
  }
  
}
