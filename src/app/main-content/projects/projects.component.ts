import { Component } from '@angular/core';
import { ProjectDetailComponent } from '../../project-detail/project-detail.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetailComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
