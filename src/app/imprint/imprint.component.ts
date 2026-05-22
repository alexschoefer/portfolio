import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
/**
 * Lifecycle hook that is called after the component has been initialized.
 * Ensures that the window is scrolled to the top when the component is loaded.
 */
ngOnInit(): void {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}
}
