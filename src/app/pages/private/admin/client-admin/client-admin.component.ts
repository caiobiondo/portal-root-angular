import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IGrupoEmpresa } from 'src/app/interfaces/IGrupoEmpresa'
import { AdminService } from 'src/app/services/admin.service'
import { GrupoEmpresaService } from 'src/app/services/grupo-empresa.service'

@Component({
  selector: 'app-client-admin',
  templateUrl: './client-admin.component.html',
  styleUrls: ['./client-admin.component.css']
})
export class ClientAdminComponent implements OnInit {
  public adminForm: FormGroup = {} as FormGroup;
  public grupos: IGrupoEmpresa[] = [] as IGrupoEmpresa[]

  constructor (
    private formBuilder: FormBuilder,
    private grupoService: GrupoEmpresaService,
    private adminService: AdminService
  ) { }

  async ngOnInit (): Promise<void> {
    this.adminForm = this.createAdminForm()
    this.grupos = await this.grupoService.get()
  }

  createAdminForm (): FormGroup {
    return this.formBuilder.group({
      empresa: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password1: [null, [Validators.required]],
      password2: [null, [Validators.required]]
    })
  }

  async submit (): Promise<void> {
    const enviarFrom = await this.adminService.post(this.adminForm.value)
    if (enviarFrom) {
      this.adminForm.reset()
    }
  }
}
