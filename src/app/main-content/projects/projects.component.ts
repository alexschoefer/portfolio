import { Component, AfterViewInit } from '@angular/core';
import { ProjectDetailComponent } from '../../project-detail/project-detail.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Displays a list of projects and allows users to open a detailed project view.
 * Supports switching between projects and prevents page scrolling while a project detail is open.
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetailComponent, CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  /**
   * Initializes the AOS (Animate On Scroll) library once the view has fully rendered.
   * 
   * This ensures that scroll-based animations are properly set up and triggered
   * when the component's elements enter the viewport.
   *
   * - `duration`: Sets the animation duration in milliseconds
   * - `easing`: Defines the transition timing function
   * - `once`: Ensures animations occur only once per element
   */

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    });
  }

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
      projectName: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png', type: 'frontend' },
        { name: 'CSS', icon: './assets/icons/css-icon.png', type: 'frontend' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png', type: 'frontend' },
      ],
      image: './assets/img/el_pollo_loco_mainscreen.png',
      imageOverlay: [
        './assets/img/project-screenshot-el_pollo_overlay.png'
      ],
      gitHubButton: 'GitHub',
      liveTestButton: 'Live Test',
      gitHublink: 'https://github.com/alexschoefer/el-pollo-loco.git',
      liveLink: 'https://elpolloloco.alexander-schoefer.de/index.html'
    },
    {
      projectID: '02',
      projectName: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png', type: 'frontend' },
        { name: 'CSS', icon: './assets/icons/css-icon.png', type: 'frontend' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png', type: 'frontend' },
        { name: 'Firebase', icon: './assets/icons/firebase-icon.png', type: 'frontend' },
      ],
      image: './assets/img/join_mainscreen.png',
      imageOverlay: [
        './assets/img/join_mainscreen.png'
      ],
      gitHubButton: 'GitHub',
      liveTestButton: 'Live Test',
      gitHublink: 'https://github.com/alexschoefer/Join_470.git',
      liveLink: 'https://join.alexander-schoefer.de/index.html'
    },
    {
      projectID: '03',
      projectName: 'Coderr',
      description: 'Coderr is a backend system for a developer platform that connects clients and developers. The backend is built using Django and Django REST Framework',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png', type: 'frontend' },
        { name: 'CSS', icon: './assets/icons/css-icon.png', type: 'frontend' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png', type: 'frontend' },

        { name: 'Python', icon: './assets/icons/Python.png', type: 'backend' },
        { name: 'Django', icon: './assets/icons/Django.png', type: 'backend' },
      ],
      image: './assets/img/coderr_mainscreen.png',
      imageOverlay: [
        './assets/img/coderr_mainscreen.png'
      ],
      gitHubButton: 'GitHub',
      liveTestButton: 'Live Test',
      gitHublink: 'https://github.com/alexschoefer/Coderr.git',
      liveLink: 'https://coderr.alexander-schoefer.de/index.html'
    },
    {
      projectID: '04',
      projectName: 'KanMind',
      description: 'KanMind is a backend API for a project management tool built with Django and Django REST Framework. The API enables users to manage boards, tasks, and comments while enforcing role-based access control and authentication.',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png', type: 'frontend' },
        { name: 'CSS', icon: './assets/icons/css-icon.png', type: 'frontend' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png', type: 'frontend' },

        { name: 'Python', icon: './assets/icons/Python.png', type: 'backend' },
        { name: 'Django', icon: './assets/icons/Django.png', type: 'backend' },
      ],
      image: './assets/img/kanmind_mainscreen.png',
      imageOverlay: [
        './assets/img/kanmind_mainscreen.png'
      ],
      gitHubButton: 'GitHub Frontend',
      liveTestButton: 'GitHub Backend',
      gitHublink: 'https://github.com/Developer-Akademie-Backendkurs/project.KanMind.git',
      liveLink: 'https://github.com/alexschoefer/KanMind.git'
    },
    {
      projectID: '05',
      projectName: 'Videoflix',
      description: 'A full-stack video streaming platform inspired by Netflix. It focuses on building a robust backend with Django REST Framework while integrating video processing workflows using FFmpeg.',
      technologies: [
        { name: 'HTML', icon: './assets/icons/html-icon.png', type: 'frontend' },
        { name: 'CSS', icon: './assets/icons/css-icon.png', type: 'frontend' },
        { name: 'JavaScript', icon: './assets/icons/javascript-icon.png', type: 'frontend' },

        { name: 'Python', icon: './assets/icons/Python.png', type: 'backend' },
        { name: 'Django', icon: './assets/icons/Django.png', type: 'backend' },
        { name: 'PostgreSQL', icon: './assets/icons/PostgreSQL.png', type: 'backend' },
        { name: 'Redis', icon: './assets/icons/Redis.png', type: 'backend' },
      ],
      image: './assets/img/videoflix_mainscreen.png',
      imageOverlay: [
        './assets/img/videoflix_mainscreen.png'
      ],
      gitHubButton: 'GitHub Frontend',
      liveTestButton: 'GitHub Backend',
      gitHublink: 'https://github.com/Developer-Akademie-Backendkurs/project.Videoflix.git',
      liveLink: 'https://github.com/alexschoefer/Videoflix.git'
    }
  ];
}
