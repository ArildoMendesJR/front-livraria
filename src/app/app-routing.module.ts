import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorListComponent } from './pages/autor/autor-list/autor-list.component';
import { AutorFormComponent } from './pages/autor/autor-form/autor-form.component';
import { AssuntoListComponent } from './pages/assunto/assunto-list/assunto-list.component';
import { AssuntoFormComponent } from './pages/assunto/assunto-form/assunto-form.component';
import { FormaCompraListComponent } from './pages/forma-compra/forma-compra-list/forma-compra-list.component';
import { FormaCompraFormComponent } from './pages/forma-compra/forma-compra-form/forma-compra-form.component';

import { LivroListComponent } from './pages/livro/livro-list/livro-list.component';
import { LivroFormComponent } from './pages/livro/livro-form/livro-form.component';
import { LivroRelatorioComponent } from './pages/livro-relatorio/livro-relatorio/livro-relatorio.component';

const routes: Routes = [
  { path: 'autor', component: AutorListComponent },
  { path: 'autor/novo', component: AutorFormComponent },
  { path: 'autor/editar/:codAu', component: AutorFormComponent },

  { path: 'assunto', component: AssuntoListComponent },
  { path: 'assunto/novo', component: AssuntoFormComponent },
  { path: 'assunto/editar/:codAs', component: AssuntoFormComponent },
  { path: 'forma-compra', component: FormaCompraListComponent },
  { path: 'forma-compra/novo', component: FormaCompraFormComponent },
  { path: 'forma-compra/editar/:codFc', component: FormaCompraFormComponent },

  { path: 'livro', component: LivroListComponent },
  { path: 'livro/novo', component: LivroFormComponent },  
  { path: 'livro/editar/:codL', component: LivroFormComponent },
  { path: 'relatorio', component: LivroRelatorioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
