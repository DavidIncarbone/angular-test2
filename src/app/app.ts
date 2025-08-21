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
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { Contatti } from './componenti/contatti/contatti';
import { Home } from './componenti/home/home';
import { ServizioProva } from './servizi/servizio-prova';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    // Prova,
    CommonModule,
    Home,
    About,
    Contact,
    Contatti,
    RouterLink,
    MatFormFieldModule,
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
    // console.log(interval(1000))
    // interval(1000).subscribe((numero) => {
    //   console.log(numero);
    // });
    // new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // }).subscribe((numero) => {
    //   console.log(numero);
    // });
  }
}
