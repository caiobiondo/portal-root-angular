import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEmpresaComponent } from './grupo-empresa.component';

describe('GrupoEmpresaComponent', () => {
  let component: GrupoEmpresaComponent;
  let fixture: ComponentFixture<GrupoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
