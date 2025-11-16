import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
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

  constructor(private http: HttpClient) {}

  name = '';
  email = '';
  message = '';

  privacyAccepted: boolean = false;
  privacyTouched: boolean = false;
  showPrivacyError: boolean = false;

  showNameError = false;
  showEmailError = false;
  showMessageError = false;

  validateField(field: 'name' | 'email' | 'message') {
    if (field === 'name') {
      this.showNameError = !this.contactData.name.trim();
    }

    if (field === 'email') {
      this.showEmailError = !this.contactData.email.trim() || !this.isValidEmail(this.email);
    }

    if (field === 'message') {
      this.showMessageError = !this.contactData.message.trim();
    }
  }

  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.trim());
  }

  clearErrorMessage(field: 'name' | 'email' | 'message') {
    if (field === 'name') this.showNameError = false;
    if (field === 'email') this.showEmailError = false;
    if (field === 'message') this.showMessageError = false;
  }

  togglePrivacy() {
    this.privacyAccepted = !this.privacyAccepted;
  }

  onPrivacyToggle() {

    if (!this.privacyTouched) {
      this.privacyTouched = true;
    }

    if (!this.privacyAccepted && this.privacyTouched) {
      this.showPrivacyError = true;
    } else {
      this.showPrivacyError = false;
    }
  }

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  mailTest = true;

  post = {
    endPoint: 'https://alexander-schoefer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
