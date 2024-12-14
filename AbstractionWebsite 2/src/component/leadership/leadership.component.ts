import { Component } from '@angular/core';
import {LeadershipCardComponent} from '../leader-card/leadership-card.component';
import { TypeCardsComponent } from '../type-cards/type-cards.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [RouterLink,TypeCardsComponent, LeadershipCardComponent,],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.css'
})
export class LeadershipComponent {

}
