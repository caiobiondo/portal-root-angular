import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'
import { ForgotPasswordComponent } from './pages/public/forgot-password/forgot-password.component'
import { LoginComponent } from './pages/public/login/login.component'
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component'
import { ResetPasswordComponent } from './pages/public/reset-password/reset-password.component'
import { SignUpComponent } from './pages/public/sign-up/sign-up.component'
import { SignUpKeyCloakComponent } from './pages/public/sing-up-key-cloak/sign-up-key-cloak.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password/:id',
    component: ResetPasswordComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'sign-up-key-cloak',
    component: SignUpKeyCloakComponent
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./pages/private/dashboard/dashboard.module').then(
  //       (module) => module.DashboardModule
  //     ),
  //   canActivate: [AuthGuard],
  //   canLoad: [AuthGuard]
  // },
  {
    path: '',
    loadChildren: () =>
      import('./pages/private/admin/admin.module').then(
        (module) => module.AdminModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/private/admin/admin.module').then(
        (module) => module.AdminModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
