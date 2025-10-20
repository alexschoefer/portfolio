import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MarqueeComponent } from './landingPage/marquee/marquee.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, NavbarComponent, MarqueeComponent, AboutComponent,SkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
