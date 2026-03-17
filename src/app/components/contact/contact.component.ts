import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceVertical } from '../../data/services.data';

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

    constructor(
        private fb: FormBuilder,
        private serviceDataService: ServiceDataService
    ) {
        this.services = this.serviceDataService.getAllServices();

        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            companyName: ['', [Validators.required]],
            serviceRequired: ['', [Validators.required]],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+ ]{10,15}$/)]],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;

            // Log for EmailJS integration as per requirements
            console.log('Form Data for EmailJS:', this.contactForm.value);

            // Simulate API call
            setTimeout(() => {
                this.isSubmitting = false;
                this.formSubmitted = true;
                this.contactForm.reset();
            }, 1500);
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
}
