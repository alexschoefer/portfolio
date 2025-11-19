import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

/**
 * Contact form component allowing users to send a message via email.
 * Includes client-side validation for input fields and optional test mode.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private http: HttpClient) { }

  /**
   * Stores the values entered into the contact form.
   */
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  showNameError = false;
  showEmailError = false;
  showMessageError = false;
  showPrivacyError = false;
  privacyAccepted = false;
  privacyTouched = false;
  // mailTest = true;
  mailSent: boolean = false;

  /**
   * HTTP POST request configuration for sending the email.
   */
  post = {
    endPoint: 'https://alexander-schoefer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'text/plain', responseType: 'text' },
    },
  };

  /**
   * Validates a specific form field when it loses focus (blur event).
   * @param field - The field to validate (`name`, `email`, or `message`)
   */
  validateField(field: 'name' | 'email' | 'message') {
    if (field === 'name') {
      this.showNameError = !this.contactData.name.trim();
    } else if (field === 'email') {
      this.showEmailError = !this.contactData.email.trim() || !this.isValidEmail(this.contactData.email);
    } else if (field === 'message') {
      this.showMessageError = !this.contactData.message.trim() || this.contactData.message.trim().length < 10;
    }
  }

  /**
   * Validates the format of an email string.
   * @param email - The email string to validate
   * @returns True if the email format is valid
   */
  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Resets the error state of a field when it gains focus.
   * @param field - The field to clear (`name`, `email`, or `message`)
   */
  clearErrorMessage(field: 'name' | 'email' | 'message') {
    if (field === 'name') this.showNameError = false;
    if (field === 'email') this.showEmailError = false;
    if (field === 'message') this.showMessageError = false;
  }

  /**
   * Toggles the privacy consent checkbox and updates the validation state.
   */
  onPrivacyToggle() {
    this.privacyTouched = true;
    this.showPrivacyError = !this.privacyAccepted;
  }

  /**
   * Checks whether all form fields and privacy consent are valid.
   * @returns True if all validation checks pass
   */
  isFormValid(): boolean {
    const nameValid = !!this.contactData.name && this.contactData.name.trim() !== '';
    const emailValid = !!this.contactData.email && this.isValidEmail(this.contactData.email);
    const messageValid = !!this.contactData.message && this.contactData.message.trim().length >= 10;
    const privacyValid = this.privacyAccepted;

    return nameValid && emailValid && messageValid && privacyValid;
  }

  /**
   * Handles form submission. Performs validation before sending a test or real HTTP request.
   * Resets the form after a successful submission.
   * @param ngForm - The Angular form reference
   */
  onSubmit(ngForm: NgForm) {
    // Validate all fields before submit
    this.showNameError = !this.contactData.name.trim();
    this.showEmailError = !this.contactData.email.trim() || !this.isValidEmail(this.contactData.email);
    this.showMessageError = !this.contactData.message.trim() || this.contactData.message.trim().length < 10;
    this.showPrivacyError = !this.privacyAccepted;

    if (!this.isFormValid()) return;

    // Test mode - no actual request
    // if (this.mailTest) {
    //   console.log('Test mode – email not sent!', this.contactData);
    //   this.mailSent = true;
    //   console.log(this.mailSent);

    //   ngForm.resetForm();
    //   this.privacyAccepted = false;
    //   this.privacyTouched = false;
    //   return;
    // }

    // Real email request
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
