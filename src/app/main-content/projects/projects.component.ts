import { Component } from '@angular/core';
import { ProjectDetailComponent } from '../../project-detail/project-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetailComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  selectedProject: any = null;
  currentIndex: number = -1;

  openProject(project: any, index: number) {
    this.selectedProject = project;
    this.currentIndex = index;
    document.body.classList.add('no-scroll');
  }

  closeProject() {
    this.selectedProject = null;
    document.body.classList.remove('no-scroll');
  }

  nextProject() {
    if (this.projects.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentIndex];
  }

  projects = [
    {
      projectID: '01',
      projectName: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: [
        { name: 'HTML', icon: '../../../assets/icons/html-icon.png' },
        { name: 'CSS', icon: '../../../assets/icons/css-icon.png' },
        { name: 'JavaScript', icon: '../../../assets/icons/javascript-icon.png' },
        { name: 'Firebase', icon: '../../../assets/icons/firebase-icon.png' },
      ],
      image: '../../../assets/img/join_mainscreen.png',
      imageOverlay: [
        '../../../assets/img/join_mainscreen.png'
      ],
      gitHublink: 'https://join.example.com'
    },
    {
      projectID: '02',
      projectName: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: [
        { name: 'HTML', icon: '../../../assets/icons/html-icon.png' },
        { name: 'CSS', icon: '../../../assets/icons/css-icon.png' },
        { name: 'JavaScript', icon: '../../../assets/icons/javascript-icon.png' },
      ],
      image: '../../../assets/img/el_pollo_loco_mainscreen.png',
      imageOverlay: [
        '../../../assets/img/project-screenshot-el_pollo_overlay.png'
      ],
      gitHublink: 'https://join.example.com'
    },
    {
      projectID: '03',
      projectName: 'Pokedex',
      description: 'This interactive Pokédex, built with HTML, CSS, and JavaScript, pulls data from an API to display each Pokémon’s name, image, and type.',
      technologies: [
        { name: 'HTML', icon: '../../../assets/icons/html-icon.png' },
        { name: 'CSS', icon: '../../../assets/icons/css-icon.png' },
        { name: 'JavaScript', icon: '../../../assets/icons/javascript-icon.png' },
      ],
      image: '../../../assets/img/pokedex_mainscreen.png',
      imageOverlay: [
        '../../../assets/img/pokedex_mainscreen.png'
      ],
      gitHublink: 'https://join.example.com'
    }
  ]


}
