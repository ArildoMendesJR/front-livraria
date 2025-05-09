import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaCompraListComponent } from './forma-compra-list.component';

describe('FormaCompraListComponent', () => {
  let component: FormaCompraListComponent;
  let fixture: ComponentFixture<FormaCompraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormaCompraListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaCompraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
