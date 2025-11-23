import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
export class SkillsComponent implements AfterViewInit, OnDestroy {

  /** IntersectionObserver instance for detecting viewport entry */
  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  /**
   * Initializes the IntersectionObserver after the view has been rendered.
   * Observes the `#skills` section and adds the `skills-visible` class
   * when it becomes visible in the viewport
   */
  ngAfterViewInit(): void {
    const sectionEl = this.elementRef.nativeElement.querySelector('#skills');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionEl.classList.add('skills-visible');
          this.observer?.unobserve(sectionEl); 
        }
      });
    }, { threshold: 0.3 });

    if (sectionEl) this.observer.observe(sectionEl);
  }

  /**
   * Disconnects the IntersectionObserver when the component is destroyed
   * to prevent memory leaks.
   */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
