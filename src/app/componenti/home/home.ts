import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  sottoscrizione: any;

  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe((numero) => {
      console.log(numero);
    });
  }
  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe();
  }
}
