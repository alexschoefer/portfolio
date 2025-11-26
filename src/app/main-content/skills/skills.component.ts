import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
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
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  
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
      duration: 1000,
      easing: 'ease-out',
      once: true
    });
  }
 }
