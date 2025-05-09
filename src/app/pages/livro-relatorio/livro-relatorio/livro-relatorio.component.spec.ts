import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroRelatorioComponent } from './livro-relatorio.component';

describe('LivroRelatorioComponent', () => {
  let component: LivroRelatorioComponent;
  let fixture: ComponentFixture<LivroRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivroRelatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
