import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { ServicesService, Signup } from '../../app/services/firestore-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-signup-page',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  users = inject(ServicesService);
  router = inject(Router);

  selectedValue: string = '';
  options: string[] = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Other']

  newUser: Signup = {
    firstname: '',
    lastname: '',
    email: '',
    grade: '',
  };

  check = false;

  successMessage: string = '';
  errorMessage: string = '' 

  checkInputs() {
    if (this.newUser.email && this.newUser.firstname && this.newUser.lastname && this.newUser.grade){
      this.check = true
    };
  }

  onSignup() {
    if (this.newUser.email && this.newUser.firstname && this.newUser.lastname && this.newUser.grade) {
      // Attempt to add user to the database
      this.users.addUser(this.newUser).then(() => {
        this.successMessage = 'Signup Successful';

        // Redirect to the home page after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      }).catch((error) => {
        this.successMessage = error.message;
      });

      // Clear form fields after submission
      this.newUser.firstname = '';
      this.newUser.lastname = '';
      this.newUser.email = '';
      this.newUser.grade = this.selectedValue;
    }
  }
}
