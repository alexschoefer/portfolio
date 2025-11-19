import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

/**
 * Navigation bar component that provides language switching and a responsive burger menu for smaller screens.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
   * Controls the visibility of the burger menu.
   */
  menuOpen = false;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    this.translate.use('en');
  }

  /**
   * Returns the currently active language used by the translation service.
   */
  get currentLang(): 'en' | 'de' {
    return this.translate.currentLang as 'en' | 'de';
  }

  /**
   * Switches the current language to English or German.
   * @param lang - The selected language as 'EN' or 'DE'
   */
  toggleLanguage(lang: 'EN' | 'DE') {
    this.translate.use(lang.toLowerCase());
  }

  /**
   * Toggles the burger menu visibility
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
