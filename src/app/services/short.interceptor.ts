import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = 'a5c9a02a39e0093258f49d50218eaa8b16825aa1';
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${TOKEN}`}
    });
    return next.handle(request);
  }
}