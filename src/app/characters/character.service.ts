import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { Response } from '../models/response';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getCharacterById(id: number): Observable<Response<Character>> {
    return this.http
      .get<Response<Character>>(`${environment.marvelApiUrl}characters/${id}${this.sharedService.getAuthParams()}`);
  }

  getResourceByUrl(url: string): Observable<Response<any>>{
    return this.http.get<Response<any>>(`${url}${this.sharedService.getAuthParams()}` );
  }
}
