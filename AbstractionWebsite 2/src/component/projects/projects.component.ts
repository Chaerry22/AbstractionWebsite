import { Component, input, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
  design = input.required<string>();
  professor = input.required<string>();
  backgroundcolor = input.required<string>();
}
