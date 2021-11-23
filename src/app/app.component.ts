import { Component } from '@angular/core'
import { environment } from 'src/environments/environment'
import { DynamicScriptLoaderService } from './services/global/dynamic-script-loader.service'
import { SpinnerService } from './services/global/spinner.service'
import { ToastService } from './services/global/toast.service'
import { ToastrService } from 'ngx-toastr'

// import * as toastr from 'toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  spinner: any = { title: '', show: false };

  constructor (
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private toastService: ToastService,
    private toastr: ToastrService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit () {
    this.loadScripts()
    this.toastService.observeToast().subscribe((val) => {
      if (val) {
        if (this.toastService.severity === 'error') {
          this.toastr.error(
            this.toastService.detail,
            this.toastService.summary
          )
        }
        if (this.toastService.severity === 'success') {
          this.toastr.success(
            this.toastService.detail,
            this.toastService.summary
          )
        }
      }
    })

    this.spinnerService.observeSpinner().subscribe((val) => {
      this.spinner.show = val
      this.spinner.title = this.spinnerService.title
      if (!val) {
        this.spinner.title = ''
        this.spinnerService.title = ''
      }
    })
  }

  private loadScripts () {
    this.dynamicScriptLoader
      .load('fontawesome')
      .then((data: any) => {
        console.log('LoadScripts complete', environment.production ? '' : data)
      })
      .catch((err: any) => {
        // Exibir erro para o usuário.
        console.log(err)
      })
  }
}
