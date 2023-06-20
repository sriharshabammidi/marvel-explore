import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Md5 } from "md5-typescript";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getAuthParams(): string {
    var timeStamp = Date.now();
    return `?ts=${timeStamp}&apikey=${environment.publicKey}&hash=${this.getHash(timeStamp)}`;
  }

  getHash(timeStamp: number): string {
    return Md5.init(`${timeStamp}${environment.privateKey}${environment.publicKey}`);
  }
}
