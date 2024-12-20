import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TypeCardsComponent } from '../type-cards/type-cards.component';
import { EventComponent } from "../event/event.component";

@Component({
    selector: 'app-home-page-component',
    standalone: true,
    imports: [RouterLink, TypeCardsComponent, EventComponent],
    templateUrl: './home-page-component.component.html',
    styleUrl: './home-page-component.component.css'
})
export class HomePageComponentComponent {
  title = 'AbstractionWebsite';
  router: any;


navigateToSignUp() {
    this.router.navigate(['/signup-page']);
} 


}
