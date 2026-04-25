import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceVertical } from '../../data/services.data';
import { CONTACT_INFO } from '../../constants/contact.constants';
import { environment } from '../../../environments/environment';

// Custom validator to prevent whitespace-only entries
function noWhitespaceOnlyValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        return null; // Let required validator handle empty values
    }
    const trimmedValue = control.value.trim();
    return trimmedValue.length === 0 ? { 'whitespaceOnly': true } : null;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contactForm: FormGroup;
    services: ServiceVertical[];
    formSubmitted = false;
    isSubmitting = false;
    emailBlurred = false;
    phoneBlurred = false;
    contactInfo = CONTACT_INFO;

    constructor(
        private fb: FormBuilder,
        private serviceDataService: ServiceDataService
    ) {
        this.services = this.serviceDataService.getAllServices();

        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2), noWhitespaceOnlyValidator]],
            email: ['', [Validators.required, Validators.email]],
            companyName: ['', [Validators.required, noWhitespaceOnlyValidator]],
            serviceRequired: [''],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+ ]{10,15}$/)]],
            message: ['', [Validators.minLength(10)]]
        });
    }

    async onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;

            try {
                const { name, email, companyName, phone, serviceRequired, message } = this.contactForm.value;

                // EmailJS template parameters — these keys must match your EmailJS template variables
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    company_name: companyName,
                    phone: phone,
                    service_required: serviceRequired || 'Not specified',
                    message: message || 'No message provided'
                };

                const result = await emailjs.send(
                    environment.emailjsServiceId,
                    environment.emailjsTemplateId,
                    templateParams,
                    environment.emailjsPublicKey
                );

                console.log('Email sent successfully:', result.text);
                this.isSubmitting = false;
                this.formSubmitted = true;
                this.contactForm.reset();
            } catch (error) {
                console.error('Email sending failed:', error);
                this.isSubmitting = false;
                alert('Failed to send message. Please try again or contact us directly.');
            }
        } else {
            this.markFormGroupTouched(this.contactForm);
        }
    }

    // Helper to show validation errors
    private markFormGroupTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if ((control as any).controls) {
                this.markFormGroupTouched(control as FormGroup);
            }
        });
    }

    get f() { return this.contactForm.controls; }

    // Filter name input to prevent multiple consecutive spaces
    filterNameInput(event: any) {
        const input = event.target;
        const originalValue = input.value;
        // Replace multiple spaces with single space
        const filteredValue = originalValue.replace(/\s+/g, ' ');
        if (originalValue !== filteredValue) {
            input.value = filteredValue;
            this.contactForm.get('name')?.setValue(filteredValue);
        }
    }

    // Filter company input to prevent multiple consecutive spaces
    filterCompanyInput(event: any) {
        const input = event.target;
        const originalValue = input.value;
        // Replace multiple spaces with single space
        const filteredValue = originalValue.replace(/\s+/g, ' ');
        if (originalValue !== filteredValue) {
            input.value = filteredValue;
            this.contactForm.get('companyName')?.setValue(filteredValue);
        }
    }

    // Filter email input
    filterEmailInput(event: any) {
        const input = event.target;
        this.contactForm.get('email')?.setValue(input.value);
    }

    // Email blur handler
    onEmailBlur() {
        this.emailBlurred = true;
    }

    // Email focus handler
    onEmailFocus() {
        this.emailBlurred = false;
    }

    // Filter phone input to allow only digits and specific characters
    filterPhoneInput(event: any) {
        const input = event.target;
        const originalValue = input.value;
        // Allow only digits, spaces, hyphens, and plus sign
        const filteredValue = originalValue.replace(/[^0-9\-\+ ]/g, '');
        if (originalValue !== filteredValue) {
            input.value = filteredValue;
            this.contactForm.get('phone')?.setValue(filteredValue);
        }
    }

    // Phone blur handler
    onPhoneBlur() {
        this.phoneBlurred = true;
    }

    // Phone focus handler
    onPhoneFocus() {
        this.phoneBlurred = false;
    }
}
