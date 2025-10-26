import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  showNameError = false;
  showEmailError = false;
  showMessageError = false;

  validateField(field: 'name' | 'email' | 'message') {
    if (field === 'name') {
      this.showNameError = !this.name.trim();
    }

    if (field === 'email') {
      this.showEmailError = !this.email.trim() || !this.isValidEmail(this.email);
    }

    if (field === 'message') {
      this.showMessageError = !this.message.trim();
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
}
