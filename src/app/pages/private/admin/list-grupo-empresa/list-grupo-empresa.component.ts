import { Component, OnInit } from '@angular/core'
import { IGrupoEmpresa } from 'src/app/interfaces/IGrupoEmpresa'
import { GrupoEmpresaService } from 'src/app/services/grupo-empresa.service'

@Component({
  selector: 'app-list-grupo-empresa',
  templateUrl: './list-grupo-empresa.component.html',
  styleUrls: ['./list-grupo-empresa.component.css']
})

export class ListGrupoEmpresaComponent implements OnInit {
  public grupos: IGrupoEmpresa[] = [] as IGrupoEmpresa[];

  constructor (private gruposService: GrupoEmpresaService) {}

  async ngOnInit (): Promise<void> {
    this.grupos = await this.gruposService.get()
  }
}
