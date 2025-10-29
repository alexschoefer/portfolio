import { Component } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  projects = [
    {
      projectID: '01',
      name: 'Join',
      technologies: 'HTML | CSS | JavaScript | Firebase',
      image: '../../../assets/img/join_mainscreen.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
    },
    {
      name: 'El Pollo Loco',
      technologies: 'HTML | CSS | JavaScript',
      image: '../../../assets/img/el_pollo_logo_mainscreen.png',
      description: 'Beschreibung für El Pollo Loco Projekt'
    },
    {
      name: 'Pokedex',
      technologies: 'HTML | CSS | JavaScript',
      image: '../../../assets/img/pokedex_mainscreen.png',
      description: 'Beschreibung für Pokedex Projekt'
    }
  ];
}
