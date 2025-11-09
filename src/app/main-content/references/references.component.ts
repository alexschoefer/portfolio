import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements AfterViewInit {
  COMMENTS: Array<{ text: string; author: string }> = [];
  commentsLoaded = false;
  currentActiveComment = 1; 
  startIndex = 1;

  constructor(private translate: TranslateService) {
    this.loadComments();
    this.translate.onLangChange.subscribe(() => this.loadComments());
  }

  ngAfterViewInit() {
    // Optional: re-calculate translateX on window resize
    window.addEventListener('resize', () => {
      // trigger change detection if needed
      this.currentActiveComment = this.currentActiveComment; 
    });
  }

  loadComments() {
    this.translate.get('REFERENCES.COMMENTS').subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.COMMENTS = res;
        this.commentsLoaded = true;
        this.currentActiveComment = this.startIndex;
      } else {
        console.error('Expected an array for REFERENCES.COMMENTS', res);
        this.COMMENTS = [];
        this.commentsLoaded = false;
      }
    });
  }

  nextComment() {
    this.currentActiveComment = (this.currentActiveComment + 1) % this.COMMENTS.length;
  }

  preComment() {
    this.currentActiveComment = (this.currentActiveComment - 1 + this.COMMENTS.length) % this.COMMENTS.length;
  }

  isCurrent(index: number) {
    return index === this.currentActiveComment;
  }

  getBoxWidth(): number {
    const commentEl = document.querySelector('.comment-current') as HTMLElement;
    if (commentEl) {
      const style = window.getComputedStyle(commentEl);
      const marginRight = parseInt(style.marginRight) || 0;
      const width = commentEl.offsetWidth + marginRight;
      return width;
    }
    // Fallback: Standardbreite
    return 632 + 32;
  }

  getTranslateX(): number {
    return -(this.currentActiveComment - this.startIndex) * this.getBoxWidth();
  }
}
