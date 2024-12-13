import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ServicesService, Signup } from '../../app/services/firestore-services.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  users = inject(ServicesService);
  router = inject(Router);

  newUser: Signup = {
    email: '',
    password: ''
  };

  successMessage: string = '';
  errorMessage: string = '' 

  onSignup() {
    if (this.newUser.email && this.newUser.password) {
      // Attempt to add user to the database
      this.users.addUser(this.newUser).then(() => {
        this.successMessage = 'Signup Successful';

        // Redirect to the home page after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      }).catch((error) => {
        this.successMessage = error.message;
      });

      // Clear form fields after submission
      this.newUser.email = '';
      this.newUser.password = '';
    }
  }
}
