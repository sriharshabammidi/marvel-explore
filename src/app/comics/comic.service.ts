import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';
import { Comic } from '../models/comic';
import { Response } from '../models/response';
@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getComicById(id: number): Observable<Response<Comic>> {
    return this.http
      .get<Response<Comic>>(`${environment.marvelApiUrl}comics/${id}${this.sharedService.getAuthParams()}`);
  }

  // getResourceByUrl(url: string): Observable<Response<any>> {
  //   return this.http.get<Response<any>>(`${url}${this.sharedService.getAuthParams()}`);
  // }
}
