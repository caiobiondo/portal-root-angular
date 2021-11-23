import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProfileUser } from 'src/app/interfaces/profile-user'
import { ProfileUserService } from 'src/app/services/profile-user.service'

@Component({
  selector: 'app-sign-up-key-cloak',
  templateUrl: './sign-up-key-cloak.component.html',
  styleUrls: ['./sign-up-key-cloak.component.css']
})
export class SignUpKeyCloakComponent implements OnInit {
  uploadedFiles: any[] = [];
  public signUpKeyCloakForm: FormGroup = new FormGroup({
    cnpj: new FormControl('', [Validators.required, Validators.maxLength(14)]),
    razao_social: new FormControl({ value: '', disabled: true }),
    nameFile: new FormControl(''),
    telefone: new FormControl('', [Validators.required]),
    photo: new FormControl({})
  });

  constructor (private profileUserService: ProfileUserService) {}

  ngOnInit () {}

  onUpload (files: any) {
    for (const file of files) {
      this.uploadedFiles.push(file)
      this.signUpKeyCloakForm.patchValue({
        nameFile: file.name,
        photo: file
      })
    }
  }

  formSubmit (): void {
    console.log(this.signUpKeyCloakForm.valid, this.signUpKeyCloakForm.value)
    if (this.signUpKeyCloakForm.valid) {
      const obj: ProfileUser = {
        id: 0,
        setor: '',
        cnpj: this.signUpKeyCloakForm.controls.cnpj.value,
        razao_social: this.signUpKeyCloakForm.controls.razao_social.value,
        telefone: this.signUpKeyCloakForm.controls.telefone.value,
        foto: this.signUpKeyCloakForm.controls.photo.value,
        user: 0
      }
      this.profileUserService.setProfileUser(obj).subscribe({
        next: (response) => {
          console.log(response)
        }, // route to home
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
