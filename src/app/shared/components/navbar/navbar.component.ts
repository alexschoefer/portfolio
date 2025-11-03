import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private translate: TranslateService) {
    // Verfügbare Sprachen registrieren
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    // Startsprache festlegen
    this.translate.use('en');
  }

  /** Aktuelle Sprache */
  get currentLang(): 'en' | 'de' {
    return this.translate.currentLang as 'en' | 'de';
  }

  /** Sprache umschalten */
  toggleLanguage(lang: 'EN' | 'DE') {
    this.translate.use(lang.toLowerCase());
  }

  /** Burger-Menü toggeln */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
