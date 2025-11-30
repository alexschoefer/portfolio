import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-police',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './privacy-police.component.html',
  styleUrl: './privacy-police.component.scss'
})
export class PrivacyPoliceComponent {

}
