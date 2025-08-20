import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ServizioProva } from '../../servizi/servizio-prova';
import { Contatto } from '../contatto/contatto';

@Component({
  selector: 'app-contatti',
  imports: [NgFor, CommonModule, RouterLink, Contatto, RouterOutlet],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti implements OnInit {
  persone: any;
  // persona: any;
  isProfile: boolean = false;
  constructor(private servizioProva: ServizioProva, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true;
    // if (this.route.snapshot.paramMap.get('id')) {
    //   // this.isProfile = true;
    //   this.persona = this.servizioProva.getPersona(
    //     parseInt(this.route.snapshot.paramMap.get('id')!)
    //   );
    //   // console.log(this.persona);
    // } else {
    //   this.isProfile = false;
    //   // this.persone = this.servizioProva.getPersone();
    // }
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(this.isProfile);
  }
}
