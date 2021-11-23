import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HashService } from 'src/app/services/hash.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private hash: string | null = '';
  public validHash: boolean = true;
  public eyePass: boolean = false;
  public eyeReapetPass: boolean = false;
  public forgotPasswordHashForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(false, [Validators.requiredTrue])
  });

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private hashService: HashService
  ) { }

  ngOnInit (): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.hash = params.get('id')
      // if (this.hash) this.checkHash();
    })
  }

  checkHash () {
    this.hashService.checkHash('' + this.hash).subscribe({
      next: (valid) => { this.validHash = valid }
    })
  }

  goBack () {
    this.router.navigateByUrl('/login')
  }

  toggleEyePass () {
    this.eyePass = !this.eyePass
  }

  toggleEyeReapetPass () {
    this.eyeReapetPass = !this.eyeReapetPass
  }

  verifyPass () {
    if (this.forgotPasswordHashForm.controls.password.value !== '' && this.forgotPasswordHashForm.controls.repeatPassword.value !== '') {
      if (this.forgotPasswordHashForm.controls.password.value === this.forgotPasswordHashForm.controls.repeatPassword.value) {
        this.forgotPasswordHashForm.patchValue({ confirmPassword: true })
      }
    }
  }

  formHashSubmit () {
    console.log('Enviar HashForm', this.forgotPasswordHashForm.get('password')?.value)
  }
}
