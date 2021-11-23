import { Component, OnInit } from '@angular/core'
import { IAdministrator } from 'src/app/interfaces/IAdministrator'
import { AdminService } from 'src/app/services/admin.service'

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  public admins: IAdministrator[] = [] as IAdministrator[];

  constructor (private adminService: AdminService) {}

  async ngOnInit (): Promise<void> {
    this.admins = await this.adminService.get()
  }
}
