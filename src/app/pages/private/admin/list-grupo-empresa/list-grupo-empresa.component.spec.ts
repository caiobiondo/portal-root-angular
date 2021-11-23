import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrupoEmpresaComponent } from './list-grupo-empresa.component';

describe('ListGrupoEmpresaComponent', () => {
  let component: ListGrupoEmpresaComponent;
  let fixture: ComponentFixture<ListGrupoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrupoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrupoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
