import { TestBed } from '@angular/core/testing';

import { LivroRelatorioService } from './livro-relatorio.service';

describe('LivroRelatorioService', () => {
  let service: LivroRelatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroRelatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
