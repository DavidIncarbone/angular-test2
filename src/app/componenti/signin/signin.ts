import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth';
import { MaterialModule } from '../../moduli/material/material-module';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, MaterialModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  constructor(protected authService: AuthService) {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password).subscribe({
      next: (data: any) => {
        console.log(data);
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
        this.authService.createUser(data.email, data.localId, data.idToken, expirationDate);
        console.log(this.authService.user);
        localStorage.setItem('user', JSON.stringify(this.authService.user));
      },
      error: (err) => {
        console.error(err);
        return;
      },
    });
    console.log(email, password);
    form.reset();
  }
}
