import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Displays a skills section and triggers a CSS animation
 * when the section enters the viewport using IntersectionObserver.
 * The animation is only played once per page load.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {

/**
 * Indicates whether to show frontend or backend skills. This is used to toggle between the two skill sets in the template. 
 * The default value is true, meaning frontend skills are shown by default.
 */

  showFrontend = true;

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true
    });
  }

  toggleSkills(showFrontend: boolean): void {
    this.showFrontend = showFrontend;

    setTimeout(() => {
      AOS.refresh();
    });
  }


}
