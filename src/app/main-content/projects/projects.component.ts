import { Component } from '@angular/core';
import { ProjectDetailComponent } from '../../project-detail/project-detail.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Displays a list of projects and allows users to open a detailed project view.
 * Supports switching between projects and prevents page scrolling while a project detail is open.
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetailComponent, CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  /**
   * The currently selected project. When `null`, no project detail is shown.
   */
  selectedProject: any = null;

  /**
   * Index of the currently selected project in the `projects` array.
   * Defaults to `-1` when no project is selected.
   */
  currentIndex: number = -1;

  /**
   * Opens the project detail view for the given project and prevents background scrolling.
   * @param project - The project object to display.
   * @param index - The index of the project in the project list.
   */
  openProject(project: any, index: number) {
    this.selectedProject = project;
    this.currentIndex = index;
    document.body.classList.add('no-scroll');
  }

  /**
   * Closes the project detail view and re-enables page scrolling.
   */
  closeProject() {
    this.selectedProject = null;
    document.body.classList.remove('no-scroll');
  }

  /**
   * Navigates to the next project in the list.
   * Wraps around to the first project when the end of the list is reached.
   */
  nextProject() {
    if (this.projects.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentIndex];
  }

  /**
   * List of available projects displayed in the component.
   */
  projects = [
    {
      projectID: '01',
      projectName: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png' },
        { name: 'CSS', icon: './assets/icons/css-icon.png' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png' },
        { name: 'Firebase', icon: './assets/icons/firebase-icon.png' },
      ],
      image: './assets/img/join_mainscreen.png',
      imageOverlay: [
        './assets/img/join_mainscreen.png'
      ],
      gitHublink: 'https://github.com/alexschoefer/Join_470.git',
      liveLink: 'test'
    },
    {
      projectID: '02',
      projectName: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png' },
        { name: 'CSS', icon: './assets/icons/css-icon.png' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png' },
      ],
      image: './assets/img/el_pollo_loco_mainscreen.png',
      imageOverlay: [
        './assets/img/project-screenshot-el_pollo_overlay.png'
      ],
      gitHublink: 'https://github.com/alexschoefer/el-pollo-loco.git',
      liveLink: 'test'
    },
    {
      projectID: '03',
      projectName: 'Pokedex',
      description: 'This interactive Pokédex, built with HTML, CSS, and JavaScript, pulls data from an API to display each Pokémon’s name, image, and type.',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png' },
        { name: 'CSS', icon: './assets/icons/css-icon.png' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png' },
      ],
      image: './assets/img/pokedex_mainscreen.png',
      imageOverlay: [
        './assets/img/pokedex_mainscreen.png'
      ],
      gitHublink: 'https://github.com/alexschoefer/Pokedex.git',
      liveLink: 'test'
    }
  ];
}
