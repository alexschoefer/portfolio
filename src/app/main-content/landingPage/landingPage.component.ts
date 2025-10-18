import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { MarqueeComponent } from './marquee/marquee.component';


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent, MarqueeComponent],
    template: `
        <section>
            <div class="title-container">
                <h2>Fronted Developer</h2>
                <h1>Alexander Schöfer</h1>
                <div class="btn-title-container">
                    <button class="btn-check-work"><span>Check my work</span></button>
                    <button class="btn-contact"><span>Contact me</span></button>
                </div>
                <div class="side-content">
                    <div class="left-content-container">
                        <div class="navigation-arrow">
                            <span class="arrow">&#8595;</span>
                        </div>
                        <div class="line-left"></div>
                    </div>
                    <div class="right-content-container">
                        <div class="mail-contact">
                            <a href="mailto:alex.schoefer@gmx.net">alex.schoefer&#64;gmx.net</a>
                        </div>
                        <div class="contact-icons">
                            <a href="">
                                <img class="github-icon" src="../../assets/icons/Github.png" alt="github">
                            </a>
                            <a href="">
                                <img class="linkedin-icon" src="../../assets/icons/Linkedin.png" alt="linkedin">
                            </a>
                        </div>
                        <div class="line-right"></div>
                    </div>
                </div>
            </div>
        </section>
        `
    ,
    styleUrls: ['./landingPage.component.scss']
})


export class LandingPageComponent {
}