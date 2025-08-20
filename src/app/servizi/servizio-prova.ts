import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProva {
  persone = [
    { nome: 'Luca', cognome: 'Rossi', isOnline: true, color: 'red' },
    { nome: 'Anna', cognome: 'Bianchi', isOnline: false, color: 'blue' },
    { nome: 'Marco', cognome: 'Verdi', isOnline: true, color: 'green' },
    { nome: 'Sara', cognome: 'Neri', isOnline: false, color: 'yellow' },
    { nome: 'Giulia', cognome: 'Gialli', isOnline: true, color: 'purple' },
  ];
}
