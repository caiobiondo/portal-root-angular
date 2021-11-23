import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/global/auth.service'
import { SpinnerService } from 'src/app/services/global/spinner.service'
import { ToastService } from 'src/app/services/global/toast.service'
import { IToken } from 'src/app/interfaces/global/IToken'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = {} as FormGroup;
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  constructor (
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private spinnerService: SpinnerService,
    private router: Router,
    private toasterService: ToastService
  ) { }

  ngOnInit (): void {
    this.loginForm = this.createLoginForm()
  }

  createLoginForm (): FormGroup {
    return this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      keep_logged: true
    })
  }

  pegaEvento (event: any) {
    console.log('Vai', event)
  }

  async signIn (form = this.loginForm.value): Promise<void> {
    this.spinnerService.title = 'Loggin in...'
    this.spinnerService.spinner = true
    const token: IToken = await this.auth.signIn(form)
    if (!token) {
      return
    }
    const storageToken: boolean = await this.auth.storageToken(token, form.keep_logged)

    if (storageToken) {
      this.spinnerService.spinner = false
      this.toasterService.severity = 'success'
      this.toasterService.detail = 'User has logged in successfully.'
      this.toasterService.toaster = true
      this.router.navigateByUrl('admin')
    }
  }
}
