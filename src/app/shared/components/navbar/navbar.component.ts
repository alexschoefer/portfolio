import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isEnglish: boolean = true;
  menuOpen: boolean = false;

  toggleLanguage(lang?: 'EN' | 'DE') {
    if (lang) {
      this.isEnglish = lang === 'EN';
    } else {
      this.isEnglish = !this.isEnglish;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
