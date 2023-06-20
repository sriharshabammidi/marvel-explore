import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.http
      .get<any>(`${environment.marvelApiUrl}characters${this.sharedService.getAuthParams()}`)
      .subscribe(data => {
        console.log(data);
      });
  }


}
