import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class JwtInterceptor implements HttpInterceptor {

constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken() || ""

    const tokenizedRequest = req.clone({ headers: req.headers.set('Authorization','Bearer '+token) })
    
    return next.handle(tokenizedRequest).pipe(
      catchError(err => {
        const error = err.error.message || "Failed. Try again later";

        return throwError(error)
      })
    )
  }
}