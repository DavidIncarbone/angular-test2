import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { Prova } from './prova/prova';
import { ServizioProva } from './servizi/servizio-prova';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    Prova,
    CommonModule,
  ],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private servizioProva: ServizioProva) {}
  title = 'ANGULAR-TEST2';
  // numero = 5.33333333333333;
  numero = 5;
  oggi = Date.now();

  // filtra()
  // ordinaColonna(){
  //   fai cose per ordinare la colonna
  // }

  ngOnInit(): void {
    console.log('app-component', this.servizioProva.persone);
  }
}
