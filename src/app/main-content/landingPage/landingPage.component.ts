import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { MarqueeComponent } from './marquee/marquee.component';


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent, MarqueeComponent],
    templateUrl: './landingPage.component.html', 
    styleUrls: ['./landingPage.component.scss']
})


export class LandingPageComponent {
}