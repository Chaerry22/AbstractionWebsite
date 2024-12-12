import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TypeCardsComponent } from '../type-cards/type-cards.component';

@Component({
  selector: 'app-home-page-component',
  standalone: true,
  imports: [RouterLink, TypeCardsComponent],
  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.css'
})
export class HomePageComponentComponent {
  title = 'AbstractionWebsite';
  router: any;
//     router: any;


navigateToSignUp() {
    this.router.navigate(['/signup-page']);
} 
}
