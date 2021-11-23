import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IEmpresa } from 'src/app/interfaces/Empresas'
import { EmpresaService } from 'src/app/services/empresa.service'
import { GrupoEmpresaService } from 'src/app/services/grupo-empresa.service'

@Component({
  selector: 'app-grupo-empresa',
  templateUrl: './grupo-empresa.component.html',
  styleUrls: ['./grupo-empresa.component.css']
})
export class GrupoEmpresaComponent implements OnInit {
  public grupoForm: FormGroup = {} as FormGroup;
  public empresas: IEmpresa[] = [] as IEmpresa[];

  constructor (
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private grupoService: GrupoEmpresaService
  ) {}

  async ngOnInit (): Promise<void> {
    this.grupoForm = this.createGrupoForm()
    this.empresas = await this.empresaService.get()
  }

  createGrupoForm (): FormGroup {
    return this.formBuilder.group({
      empresas: [null, [Validators.required]],
      grupo: [null, [Validators.required]]
    })
  }

  addEmpresa (event: any) {
    console.log(this.grupoForm.value)
  }

  async submit (): Promise<void> {
    const enviarFrom = await this.grupoService.post(this.grupoForm.value)
    if (enviarFrom) {
      this.grupoForm.reset()
    }
  }
}
