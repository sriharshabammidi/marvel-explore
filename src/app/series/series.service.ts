import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aSeries } from '../models/aSeries';
import { Response } from '../models/response';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getSeriesById(id: number): Observable<Response<aSeries>> {
    return this.http
      .get<Response<aSeries>>(`${environment.marvelApiUrl}series/${id}${this.sharedService.getAuthParams()}`);
  }
}
