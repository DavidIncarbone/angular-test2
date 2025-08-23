import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink, RouterOutlet } from '@angular/router';
import { Highlight } from '../../direttive/highlight';
import { Firebase } from '../../servizi/firebase';
import { ServizioProva } from '../../servizi/servizio-prova';

@Component({
  selector: 'app-contatto',
  imports: [RouterLink, RouterOutlet, Highlight, NgStyle],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
})
export class Contatto implements OnInit {
  [x: string]: any;
  // persona = { nome: 'Lucaaaa', cognome: 'Qwerty', color: 'red' };
  // persona: any;
  // @Input() personaContatto: any;
  persona: any;
  id: string | undefined;
  color: string = '';

  constructor(
    private servizioProva: ServizioProva,
    private route: ActivatedRoute,
    protected firebase: Firebase
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!;
      console.log(this.id);
      this.firebase.getPersona(this.firebase.url, this.id).subscribe((data) => {
        console.log(data);
        return (this.persona = data);
      });
      // this.color = this.persona.colore;
    });
    // this.color = this.persona.color;
    // if (this.route.snapshot.paramMap.get('id')) {
    //   // this.isProfile = true;
    //   this.persona = this.servizioProva.getPersona(
    //     parseInt(this.route.snapshot.paramMap.get('id')!)
    //   );
    // }
    // console.log(this.persona);
  }
}
