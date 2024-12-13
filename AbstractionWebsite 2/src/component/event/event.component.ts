import { Component, input } from '@angular/core';

@Component({
    selector: 'app-event',
    standalone: true,
    imports: [],
    templateUrl: './event.component.html',
    styleUrl: './event.component.css'
})
export class EventComponent {
    title = input.required<string>();
    description = input.required<string>();
    date = input.required<string>();
    image = input.required<string>();
}
