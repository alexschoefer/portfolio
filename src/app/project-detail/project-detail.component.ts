import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  @Input() project: any;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  DESCRIPTION: Array<{ text: string }> = [];
  descriptionLoaded = false;

  constructor(private translate: TranslateService) {
    this.loadDescriptions();
    this.translate.onLangChange.subscribe(() => this.loadDescriptions());
  }

  /** Lädt übersetzte Projektbeschreibungen */
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

  /** Gibt den passenden Beschreibungstext zum aktuellen Projekt zurück */
  get descriptionText(): string {
    if (!this.project || !this.DESCRIPTION.length) return '';
    const index = this.project.projectID - 1; // IDs starten bei 1
    return this.DESCRIPTION[index]?.text || '';
  }

  /** Buttons */
  onClose() {
    this.close.emit();
  }

  onNext() {
    this.next.emit();
  }
}
