import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  comments = [
    { text: 'Comment left', author: 'Author 1' },
    { text: 'Lukas has proven to be a reliable group partner...', author: 'H. Janisch - Team Partner' },
    { text: 'Comment right', author: 'Author 3' }
  ];

  currentActiveComment = 1; 
  boxWidth = 632 + 32;     
  startIndex = 1;       

  nextComment() {
    this.currentActiveComment = (this.currentActiveComment + 1) % this.comments.length;
  }

  preComment() {
    this.currentActiveComment = (this.currentActiveComment - 1 + this.comments.length) % this.comments.length;
  }

  isCurrent(index: number) {
    return index === this.currentActiveComment;
  }

  getTranslateX() {
    return -(this.currentActiveComment - this.startIndex) * this.boxWidth;
  }
}
