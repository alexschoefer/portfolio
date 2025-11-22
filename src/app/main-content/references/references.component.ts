import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Displays translated reference comments in a horizontal carousel.
 * Comments reload when the active language changes.
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
   * List of comments loaded from the translation JSON.
   */
  COMMENTS: Array<{ text: string; author: string }> = [];

  /**
   * Indicates whether comments have been successfully loaded.
   */
  commentsLoaded = false;

  /**
   * Index of the currently active comment in the carousel.
   * Starts at index 1 after loading.
   */
  currentActiveComment = 1;

  translateX = 0;

  ngAfterViewInit() {
    // Nach dem ersten Rendern Position setzen
    this.updateTranslate();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateTranslate();
  }

  updateTranslate() {
    this.translateX = this.getTranslateX();
  }

  /**
   * Horizontal gap in pixels between two comment elements.
   */
  gap = 32;

  /**
   * Width in pixels of a single comment container (desktop layout).
   */
  commentWidth = 632;

  constructor(private translate: TranslateService) {
    this.loadComments();
    this.translate.onLangChange.subscribe(() => this.loadComments());
  }

  /**
   * Loads the comments from translation files using the key `REFERENCES.COMMENTS`.
   * Validates that the result is an array.
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
   * Moves to the next comment in the carousel.
   * Wraps around when reaching the last one.
   */
  nextComment() {
    this.currentActiveComment = (this.currentActiveComment + 1) % this.COMMENTS.length;
  }

  /**
   * Moves to the previous comment in the carousel.
   * Wraps around when reaching the first one.
   */
  preComment() {
    this.currentActiveComment = (this.currentActiveComment - 1 + this.COMMENTS.length) % this.COMMENTS.length;
  }

  /**
   * Checks if a given comment index matches the currently active comment.
   * @param index - The index of a comment
   * @returns True if it's currently active
   */
  isCurrent(index: number) {
    return index === this.currentActiveComment;
  }

  /**
   * Calculates the horizontal translation value for centering the active comment in a desktop carousel layout.
   * Returns 0 on smaller screens (mobile/tablet) to disable horizontal movement.
   * @returns Horizontal transform translateX value in pixels
   */
  getTranslateX() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 1140) return 0; // Slider deaktiviert
  
    const activeIndex = this.currentActiveComment;
    const totalComments = this.COMMENTS.length;
  
    const wrapperCenter = screenWidth / 2;
    const activeCommentCenter = activeIndex * (this.commentWidth + this.gap) + this.commentWidth / 2;
  
    return wrapperCenter - activeCommentCenter;
  }
  
}
