import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
        <section>
            <h2>Fronted Developer</h2>
            <div>
            <h1>Alexander Schöfer</h1>
            </div>
        </section>
        `
    ,
    styleUrls: ['./landingPage.component.scss']
})


export class LandingPageComponent {
}