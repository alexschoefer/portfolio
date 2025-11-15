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
  gap = 32;                   
  commentWidth = 632;         

  constructor(private translate: TranslateService) {
    this.loadComments();
    this.translate.onLangChange.subscribe(() => this.loadComments());
  }

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
    const screenWidth = window.innerWidth;

    // Unter 1025px: nur der aktuelle Kommentar zentrieren
    if (screenWidth < 1025) {
      return 0;
    }

    // Ab 1025px: alle Kommentare verschieben
    const containerWidth = this.COMMENTS.length * this.commentWidth + (this.COMMENTS.length - 1) * this.gap;
    const wrapperCenter = screenWidth / 2;
    const commentCenter = this.commentWidth / 2;
    
    // TranslateX = CurrentComment nach links verschieben, damit er in der Mitte des Viewports ist
    const translateX = -this.currentActiveComment * (this.commentWidth + this.gap) + wrapperCenter - commentCenter;
    return translateX;
  }
}
