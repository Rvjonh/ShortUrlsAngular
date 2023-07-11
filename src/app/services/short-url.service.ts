import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  URL = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private _http: HttpClient) {}

  getUrlProcessed(url:string): Observable<any>{
    const body =  {
      "long_url": url,
    } 
    return this._http.post(this.URL, body);
  }
}
