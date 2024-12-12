import { Component, input, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-type-cards',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './type-cards.component.html',
  styleUrl: './type-cards.component.css'
})
export class TypeCardsComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
  design = input.required<string>();
  backgroundcolor = input.required<string>();
  
}
