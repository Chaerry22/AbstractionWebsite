import { Component, input, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-leadership-card',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './leadership-card.component.html',
  styleUrl: './leadership-card.component.css'
})
export class LeadershipCardComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
  design = input.required<string>();
  backgroundcolor = input.required<string>();
}
