import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_URL } from './../../../temp-secrets.js';


@Injectable({
  providedIn: 'root'
})
export class PublicPageService {
  failed: HttpErrorResponse;

  constructor(
    private http: HttpClient) { }

  addMeme(formData: any): Observable<any> {
    return this.http.post(API_URL + 'meme/create', formData)
      .pipe(
        catchError(formData)
      );
  }
}
