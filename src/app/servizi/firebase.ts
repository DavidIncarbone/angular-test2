import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  url: string = 'https://angular-db-4d81b-default-rtdb.firebaseio.com/persone';
  constructor(private http: HttpClient) {}

  insertPersona(url: string, body: {}) {
    return this.http.post(url + '.json', { body });
  }

  getPersone(url: string) {
    return this.http.get(url + '.json');
  }

  getPersona(url: string, id: string) {
    return this.http.get(`${url}/${id}.json`);
  }

  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }
}
