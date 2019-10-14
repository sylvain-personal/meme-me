import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) { }

  getMemes() {
    return this.http.get('http://localhost:3000/meme');
  }
}
