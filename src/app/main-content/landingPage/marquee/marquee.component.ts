import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent {
  marqueeItems: string[] = [];

  constructor(private translate: TranslateService) {
    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations() {
    this.translate.get('MARQUEE.ITEMS').subscribe((items: string[]) => {
      this.marqueeItems = items;
    });
  }
}
