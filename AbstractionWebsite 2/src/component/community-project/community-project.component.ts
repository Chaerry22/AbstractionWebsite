import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-community-project',
    standalone: true,
    imports: [ProjectsComponent, RouterLink],
    templateUrl: './community-project.component.html',
    styleUrl: './community-project.component.css'
})
export class CommunityProjectComponent {

}
