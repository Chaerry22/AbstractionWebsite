import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ServicesService, Login } from '../../app/services/firestore-services.service';
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  users = inject(ServicesService);
  router = inject(Router);

  user: Login = {
    email: '',
    password: ''
  };

  

  onLogin() {
    console.log('User is logged in');
  }
}
