import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  COMMENTS: Array<{ text: string; author: string }> = [];
  commentsLoaded = false;
  currentActiveComment = 1; 
  boxWidth = 632 + 32;
  startIndex = 1;

  constructor(private translate: TranslateService) {
    this.loadComments();
    this.translate.onLangChange.subscribe(() => this.loadComments());
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

  getTranslateX() {
    return -(this.currentActiveComment - this.startIndex) * this.boxWidth;
  }
}
