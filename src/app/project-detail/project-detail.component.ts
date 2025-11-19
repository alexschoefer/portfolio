import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * Displays detailed information about a single project.
 */
@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  /**
   * The currently selected project whose details will be displayed.
   */
  @Input() project: any;

  /**
   * Emits an event when the detail view should be closed.
   */
  @Output() close = new EventEmitter<void>();

  /**
   * Emits an event when the next project should be displayed.
   */
  @Output() next = new EventEmitter<void>();

  /**
   * Array of translated description strings loaded from translation files.
   */
  DESCRIPTION: Array<{ text: string }> = [];

  /**
   * Indicates whether translations for the project descriptions have been successfully loaded.
   */
  descriptionLoaded = false;

  constructor(private translate: TranslateService) {
    this.loadDescriptions();
    this.translate.onLangChange.subscribe(() => this.loadDescriptions());
  }

  /**
   * Loads translated project descriptions from translation files.
   * Ensures the result is an array before assigning.
   * Logs an error if translation data does not match expectations.
   */
  private loadDescriptions() {
    this.translate.get('PROJECT.DESCRIPTION').subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.DESCRIPTION = res;
        this.descriptionLoaded = true;
      } else {
        console.error('Expected an array for PROJECT.DESCRIPTION', res);
        this.DESCRIPTION = [];
        this.descriptionLoaded = false;
      }
    });
  }

  /**
   * Returns the translated description based on the currently selected project.
   * Falls back to an empty string when missing or invalid data is detected.
   */
  get descriptionText(): string {
    if (!this.project || !this.DESCRIPTION.length) return '';
    const index = this.project.projectID - 1; 
    return this.DESCRIPTION[index]?.text || '';
  }

  /**
   * Emits a close event to close the project detail overlay
   */
  onClose() {
    this.close.emit();
  }

  /**
   * Emits a next event to notify the parent component to show the next project in sequence.
   */
  onNext() {
    this.next.emit();
  }
}
