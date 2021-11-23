import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './global/request.service';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor(
    private requestService: RequestService
  ) { }

  checkHash(hash: string): Observable<boolean> {
    return this.requestService.get<boolean>({ hash }, '');
  }
}
