import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminComponent } from './admin.component'
import { AdminRoutingModule } from './admin-routing.module'
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component'
import { ClientAdminComponent } from './client-admin/client-admin.component'
import { ListAdminComponent } from './list-admin/list-admin.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HeaderModule } from '../../../components/header/header.module'
import { FooterModule } from '../../../components/footer/footer.module'
import { SideBarModule } from '../../../components/side-bar/side-bar.module'
import { ListGrupoEmpresaComponent } from './list-grupo-empresa/list-grupo-empresa.component'
import { GrupoEmpresaComponent } from './grupo-empresa/grupo-empresa.component'

import { MultiSelectModule } from 'primeng/multiselect'
import { InputSwitchModule } from 'primeng/inputswitch'

const primeNGModules = [
  InputSwitchModule
]

const cgModules = [
  HeaderModule,
  FooterModule,
  SideBarModule
]

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule,
    MultiSelectModule,
    ...cgModules,
    ...primeNGModules
  ],
  declarations: [
    AdminComponent,
    ClientAdminComponent,
    ListAdminComponent,
    DashboardAdminComponent,
    ListGrupoEmpresaComponent,
    GrupoEmpresaComponent
  ]
})
export class AdminModule { }
