import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MarqueeComponent } from './landingPage/marquee/marquee.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, NavbarComponent, MarqueeComponent, AboutComponent,SkillsComponent, ProjectsComponent, ReferencesComponent,FooterComponent,ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
