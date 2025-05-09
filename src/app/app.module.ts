import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorListComponent } from './pages/autor/autor-list/autor-list.component';
import { AutorFormComponent } from './pages/autor/autor-form/autor-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AssuntoListComponent } from './pages/assunto/assunto-list/assunto-list.component';
import { AssuntoFormComponent } from './pages/assunto/assunto-form/assunto-form.component';
import { FormaCompraListComponent } from './pages/forma-compra/forma-compra-list/forma-compra-list.component';
import { FormaCompraFormComponent } from './pages/forma-compra/forma-compra-form/forma-compra-form.component';
import { LivroListComponent } from './pages/livro/livro-list/livro-list.component';
import { LivroFormComponent } from './pages/livro/livro-form/livro-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LivroRelatorioComponent } from './pages/livro-relatorio/livro-relatorio/livro-relatorio.component';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    AppComponent,
    AutorListComponent,
    AutorFormComponent,
    AssuntoListComponent,
    AssuntoFormComponent,
    FormaCompraListComponent,
    FormaCompraFormComponent,
    LivroListComponent,
    LivroFormComponent,
    LivroRelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
