import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
        <section>
        <div class="title-container">
            <h2>Fronted Developer</h2>
            <h1>Alexander Schöfer</h1>
            <div class="btn-title-container">
            <button class="btn-check-work"><span>Check my work</span></button>
            <button class="btn-contact"><span>Contact me</span></button>
            </div>
        </div>
        </section>

        `
    ,
    styleUrls: ['./landingPage.component.scss']
})


export class LandingPageComponent {
}