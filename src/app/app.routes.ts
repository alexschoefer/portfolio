import { Routes } from '@angular/router';
import { LandingPageComponent } from './main-content/landingPage/landingPage.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent}, 
    { path: 'privacy-police', component: PrivacyPoliceComponent} 
  ];
