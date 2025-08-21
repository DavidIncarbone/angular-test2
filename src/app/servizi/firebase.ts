import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  constructor(private http: HttpClient) {}

  insertPersona(url: string, body: {}) {
    return this.http.post(url, { body });
  }
}
