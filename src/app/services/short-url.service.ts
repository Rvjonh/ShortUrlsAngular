import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  URL = 'https://api-ssl.bitly.com/v4/shorten';
  token = 'a5c9a02a39e0093258f49d50218eaa8b16825aa1';

  constructor(private _http: HttpClient) {}

  getUrlProcessed(url:string): Observable<any>{
    const header = new HttpHeaders({Authorization: `Bearer ${this.token}`})
    const body =  {
      "long_url": url,
    } 
    return this._http.post(this.URL, body, { headers: header});
  }
}
