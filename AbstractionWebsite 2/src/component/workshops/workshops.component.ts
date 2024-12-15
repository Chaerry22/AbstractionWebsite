import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-workshops',
    standalone: true,
    imports:[ProjectsComponent, RouterLink],
    templateUrl: './workshops.component.html',
    styleUrl: './workshops.component.css',

})
export class WorkshopsComponent {

}
