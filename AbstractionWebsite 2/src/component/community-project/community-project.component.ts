import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
    selector: 'app-community-project',
    standalone: true,
    imports: [ProjectsComponent],
    templateUrl: './community-project.component.html',
    styleUrl: './community-project.component.css'
})
export class CommunityProjectComponent {

}
