import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariacaoComponent } from './variacao.component';

describe('VariacaoComponent', () => {
  let component: VariacaoComponent;
  let fixture: ComponentFixture<VariacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
