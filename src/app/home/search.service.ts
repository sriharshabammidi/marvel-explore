import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { Response } from '../models/response';
import { Character } from '../models/character';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private sharedService: SharedService) {

  }

  getCharacters(searchText: string): Observable<Response<Character>> {
    return this.http
      .get<Response<Character>>(`${environment.marvelApiUrl}characters${this.sharedService.getAuthParams()}&nameStartsWith=${searchText}`);
  }
}
