import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth';
import { MaterialModule } from '../../moduli/material/material-module';

@Component({
  selector: 'app-signup',
  imports: [MaterialModule, ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  homeform!: NgForm;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    this.authService
      .signUp({ email: email, password: password, returnSecureToken: true })
      .subscribe({
        next: (data) => {
          console.log('Successo:', data);
        },
        error: (err) => {
          console.error('Errore Firebase:', err.error?.error?.message || err.message);
        },
      });
    form.reset();
  }
}
