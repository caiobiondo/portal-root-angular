import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin.component'
import { ClientAdminComponent } from './client-admin/client-admin.component'
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component'
import { GrupoEmpresaComponent } from './grupo-empresa/grupo-empresa.component'
import { ListAdminComponent } from './list-admin/list-admin.component'
import { ListGrupoEmpresaComponent } from './list-grupo-empresa/list-grupo-empresa.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardAdminComponent
      },
      {
        path: 'list-admin',
        component: ListAdminComponent
      },
      {
        path: 'client-admin',
        component: ClientAdminComponent
      },
      {
        path: 'grupo-empresa',
        component: GrupoEmpresaComponent
      },
      {
        path: 'list-grupo-empresa',
        component: ListGrupoEmpresaComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
