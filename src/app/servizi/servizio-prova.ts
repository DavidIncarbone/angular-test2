import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProva {
  private persone = [
    { nome: 'Luca', cognome: 'Rossi', isOnline: true, color: 'red' },
    { nome: 'Anna', cognome: 'Bianchi', isOnline: false, color: 'blue' },
    { nome: 'Marco', cognome: 'Verdi', isOnline: true, color: 'green' },
    { nome: 'Sara', cognome: 'Neri', isOnline: false, color: 'yellow' },
    { nome: 'Giulia', cognome: 'Gialli', isOnline: true, color: 'purple' },
  ];

  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersona(index: number) {
    return this.persone[index];
  }
}
