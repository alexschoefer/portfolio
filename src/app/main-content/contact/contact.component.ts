import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private http: HttpClient) { }

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  // Fehleranzeigen
  showNameError = false;
  showEmailError = false;
  showMessageError = false;
  showPrivacyError = false;

  privacyAccepted = false;
  privacyTouched = false;

  mailTest = true; // Testmodus
  mailSent: boolean = false;

  post = {
    endPoint: 'https://alexander-schoefer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'text/plain', responseType: 'text' },
    },
  };

  /** Feldvalidierung beim Blur */
  validateField(field: 'name' | 'email' | 'message') {
    if (field === 'name') {
      this.showNameError = !this.contactData.name.trim();
    } else if (field === 'email') {
      this.showEmailError = !this.contactData.email.trim() || !this.isValidEmail(this.contactData.email);
    } else if (field === 'message') {
      this.showMessageError = !this.contactData.message.trim() || this.contactData.message.trim().length < 10;
    }
  }

  /** E-Mail Validierung */
  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.trim());
  }

  /** Fehler zurücksetzen beim Fokus */
  clearErrorMessage(field: 'name' | 'email' | 'message') {
    if (field === 'name') this.showNameError = false;
    if (field === 'email') this.showEmailError = false;
    if (field === 'message') this.showMessageError = false;
  }

  /** Checkbox geklickt */
  onPrivacyToggle() {
    this.privacyTouched = true;
    this.showPrivacyError = !this.privacyAccepted;
  }

  /** Prüft, ob alles korrekt ist */
  isFormValid(): boolean {
    const nameValid = !!this.contactData.name && this.contactData.name.trim() !== '';
    const emailValid = !!this.contactData.email && this.isValidEmail(this.contactData.email);
    const messageValid = !!this.contactData.message && this.contactData.message.trim().length >= 10;
    const privacyValid = this.privacyAccepted;

    return nameValid && emailValid && messageValid && privacyValid;
  }


  /** Formular abschicken */
  onSubmit(ngForm: NgForm) {
    // Alle Felder prüfen
    this.showNameError = !this.contactData.name.trim();
    this.showEmailError = !this.contactData.email.trim() || !this.isValidEmail(this.contactData.email);
    this.showMessageError = !this.contactData.message.trim() || this.contactData.message.trim().length < 10;
    this.showPrivacyError = !this.privacyAccepted;

    // Wenn was ungültig → abbrechen
    if (!this.isFormValid()) return;

    console.log(this.mailSent);
    if (this.mailTest) {
      console.log('Testmodus – keine Email gesendet!', this.contactData);
      this.mailSent = true;
      console.log(this.mailSent);
      
      ngForm.resetForm();
      this.privacyAccepted = false;
      this.privacyTouched = false;
      return;
    }

    // Echte Mail senden
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => {
          ngForm.resetForm();
          this.privacyAccepted = false;
          this.privacyTouched = false;
        },
        error: (err) => console.error(err)
      });
  }
}
