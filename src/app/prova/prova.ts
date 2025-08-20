import { Component, OnInit } from '@angular/core';
import { ServizioProva } from '../servizi/servizio-prova';

@Component({
  selector: 'app-prova',
  imports: [],
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})
export class Prova implements OnInit {
  constructor(private servizioProva: ServizioProva) {}
  ngOnInit(): void {
    console.log(this.servizioProva.persone);
  }

  getPersone = () => {
    return this.servizioProva.persone;
  };

  setPersona = (index: number, name: string) => {
    this.servizioProva.persone[index].nome = name;
  };
}
