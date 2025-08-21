import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Firebase } from '../../servizi/firebase';

@Component({
  selector: 'app-home',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  // sottoscrizione: any;
  // @ViewChild('homeform') homeform!: NgForm;
  homeform!: FormGroup;

  constructor(private firebase: Firebase) {}

  ngOnInit(): void {
    // this.sottoscrizione = interval(1000).subscribe((numero) => {
    //   // console.log(numero);
    // });
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });

    // this.firebase
    //   .insertPersona('https://angular-db-4d81b-default-rtdb.firebaseio.com/persone.json', {
    //     nome: 'Luca',
    //     email: 'luca@email.it',
    //   })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  ngOnDestroy(): void {
    // this.sottoscrizione.unsubscribe();
  }

  // onSubmit(form: any) {
  // prendi dati form
  // li mandi con il service al backend
  // console.log(this.homeform);
  // }

  onSubmit() {
    console.log(this.homeform);
    this.firebase
      .insertPersona(
        'https://angular-db-4d81b-default-rtdb.firebaseio.com/persone.json',
        this.homeform.value
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
