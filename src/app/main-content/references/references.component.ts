import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Displays translated reference comments in a horizontal carousel.
 * Shows three comments at a time (previous, current, next) and updates
 * the carousel when the active language changes. Handles window resize events.
 */
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

  /**
   * Array of translated comments loaded from translation files.
   */
  COMMENTS: Array<{ text: string; author: string }> = [];

  /**
   * Indicates whether comments have been successfully loaded.
   */
  commentsLoaded = false;

  /**
   * Index of the currently active (center) comment in the carousel.
   */
  currentActiveComment = 1;

  /**
   * Flag indicating that a window resize is in progress.
   */
  resizing = false;

  /**
   * Timeout ID for debouncing resize events.
   */
  resizeTimeout: any;

  constructor(private translate: TranslateService) {
    this.loadComments();
    // Reload comments when language changes
    this.translate.onLangChange.subscribe(() => this.loadComments());
  }

  /**
   * Returns the three visible comments in the carousel:
   * previous, current, and next.
   */
  get visibleComments() {
    const total = this.COMMENTS.length;
    if (total === 0) return [];
    const left = this.COMMENTS[(this.currentActiveComment - 1 + total) % total];
    const center = this.COMMENTS[this.currentActiveComment];
    const right = this.COMMENTS[(this.currentActiveComment + 1) % total];
    return [left, center, right];
  }

  /**
   * Loads translated comments from the translation service.
   * Ensures the response is an array, otherwise logs an error.
   */
  loadComments() {
    this.translate.get('REFERENCES.COMMENTS').subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.COMMENTS = res;
        this.commentsLoaded = true;
        this.currentActiveComment = 1;
      } else {
        console.error('Expected an array for REFERENCES.COMMENTS', res);
        this.COMMENTS = [];
        this.commentsLoaded = false;
      }
    });
  }

  /**
   * Advances the carousel to the next comment.
   * Wraps around to the first comment when reaching the end.
   */
  nextComment() {
    this.currentActiveComment = (this.currentActiveComment + 1) % this.COMMENTS.length;
  }

  /**
   * Moves the carousel to the previous comment.
   * Wraps around to the last comment when reaching the beginning.
   */
  preComment() {
    this.currentActiveComment = (this.currentActiveComment - 1 + this.COMMENTS.length) % this.COMMENTS.length;
  }

  /**
   * Handles window resize events.
   * Sets a `resizing` flag and debounces updates to avoid rapid state changes.
   */
  @HostListener('window:resize')
  onResize() {
    this.resizing = true;
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);

    this.resizeTimeout = setTimeout(() => {
      this.resizing = false;
    }, 1000);
  }
}
