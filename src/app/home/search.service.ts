import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { Response } from '../models/response';
import { Character } from '../models/character';
import { Observable } from 'rxjs';
import { aSeries } from '../models/aSeries';
import { Comic } from '../models/comic';
import { Creator } from '../models/creator';
import { Story } from '../models/story';
import { SearchRequest } from '../models/searchRequest';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private sharedService: SharedService) {

  }

  getCharacters(request: SearchRequest): Observable<Response<Character>> {
    return this.http
      .get<Response<Character>>(`${environment.marvelApiUrl}characters${this.sharedService.getAuthParams()}&nameStartsWith=${request.searchText}&offset=${request.offset}&limit=${request.limit}`);
  }

  getSeries(request: SearchRequest): Observable<Response<aSeries>> {
    return this.http
      .get<Response<aSeries>>(`${environment.marvelApiUrl}series${this.sharedService.getAuthParams()}&titleStartsWith=${request.searchText}&offset=${request.offset}&limit=${request.limit}`);
  }

  getComics(request: SearchRequest): Observable<Response<Comic>> {
    return this.http
      .get<Response<Comic>>(`${environment.marvelApiUrl}comics${this.sharedService.getAuthParams()}&titleStartsWith=${request.searchText}&offset=${request.offset}&limit=${request.limit}`);
  }

  getCreators(request: SearchRequest): Observable<Response<Creator>> {
    return this.http
      .get<Response<Creator>>(`${environment.marvelApiUrl}creators${this.sharedService.getAuthParams()}&nameStartsWith=${request.searchText}&offset=${request.offset}&limit=${request.limit}`);
  }

  getEvents(request: SearchRequest): Observable<Response<Event>> {
    return this.http
      .get<Response<Event>>(`${environment.marvelApiUrl}events${this.sharedService.getAuthParams()}&nameStartsWith=${request.searchText}&offset=${request.offset}&limit=${request.limit}`);
  }

  getStories(request: SearchRequest): Observable<Response<Story>> {
    return this.http
      .get<Response<Story>>(`${environment.marvelApiUrl}stories${this.sharedService.getAuthParams()}&nameStartsWith=${request.searchText}&offset=${request.offset}&limit=${request.limit}`);
  }
}
