import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public isSend: boolean = false;
  public forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor (
    private router: Router
  ) { }

  ngOnInit () { }

  goBack () {
    this.router.navigateByUrl('/login')
  }

  formSubmit () {
    console.log('Enviar Form', this.forgotPasswordForm.get('email')?.value)
    this.isSend = true
  }
}
