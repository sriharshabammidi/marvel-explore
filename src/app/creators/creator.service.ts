import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Creator } from '../models/creator';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getCreatorById(id: number): Observable<Response<Creator>> {
    return this.http
      .get<Response<Creator>>(`${environment.marvelApiUrl}creators/${id}${this.sharedService.getAuthParams()}`);
  }
}
