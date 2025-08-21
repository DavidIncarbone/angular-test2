import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  // sottoscrizione: any;

  @ViewChild('homeform') homeform!: NgForm;

  constructor() {}

  ngOnInit(): void {
    // this.sottoscrizione = interval(1000).subscribe((numero) => {
    //   // console.log(numero);
    // });
  }

  ngOnDestroy(): void {
    // this.sottoscrizione.unsubscribe();
  }

  onSubmit(form: any) {
    // prendi dati form
    // li mandi con il service al backend
    console.log(this.homeform);
  }
}
