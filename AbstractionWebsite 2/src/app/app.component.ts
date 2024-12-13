import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ServicesService, Signup } from './services/firestore-services.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
