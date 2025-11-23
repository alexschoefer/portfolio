import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy {

  /** IntersectionObserver instance for detecting viewport entry */
  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) { }

  /**
   * Initializes the IntersectionObserver after the view has been rendered.
   * Observes the `#skills` section and adds the `skills-visible` class
   * when it becomes visible in the viewport
   */
  ngAfterViewInit(): void {
    const sectionEl = this.elementRef.nativeElement.querySelector('#about');
    if (!sectionEl) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionEl.classList.add('about-visible');
          this.observer?.unobserve(sectionEl);
        }
      });
    }, { threshold: 0.3 });

    this.observer.observe(sectionEl);
  }

  /**
   * Disconnects the IntersectionObserver when the component is destroyed
   * to prevent memory leaks.
   */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
