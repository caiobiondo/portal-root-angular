import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { IEmpresa } from '../interfaces/Empresas'
import { RequestService } from './global/request.service'
// import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor (
    private reqService: RequestService,
    private toastr: ToastrService
  ) {}

  get (): Promise<IEmpresa[]> {
    return this.reqService.get<IEmpresa[]>({}, 'api/v1/empresas/').toPromise()
  }
}
