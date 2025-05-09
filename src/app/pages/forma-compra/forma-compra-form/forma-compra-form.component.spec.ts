import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaCompraFormComponent } from './forma-compra-form.component';

describe('FormaCompraFormComponent', () => {
  let component: FormaCompraFormComponent;
  let fixture: ComponentFixture<FormaCompraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormaCompraFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaCompraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
