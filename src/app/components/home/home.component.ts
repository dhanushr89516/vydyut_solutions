import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceVertical } from '../../data/services.data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, LucideAngularModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    featuredServices: ServiceVertical[] = [];

    constructor(private serviceDataService: ServiceDataService, private router: Router) {
        // Get first 6 services for featured section
        this.featuredServices = this.serviceDataService.getAllServices().slice(0, 6);
    }

    navigateToServices() {
        this.router.navigate(['/services']).then(() => {
            window.scrollTo(0, 0);
        });
    }

    navigateToContact() {
        this.router.navigate(['/contact']).then(() => {
            window.scrollTo(0, 0);
        });
    }

    stats = [
        { label: 'Reliable Execution', value: '500+', description: 'Projects Completed' },
        { label: 'Safety First', value: '100%', description: 'Compliance Rate' },
        { label: 'Cost-Effective', value: '30%', description: 'Average Cost Savings' }
    ];

    whyChooseUs = [
        {
            title: 'Minimize Downtime',
            description: 'Our preventive maintenance and rapid response teams ensure your operations run smoothly 24/7.',
            icon: '⚡'
        },
        {
            title: 'Safety Compliance',
            description: 'We adhere to all safety standards and regulations, protecting your workforce and assets.',
            icon: '🛡️'
        },
        {
            title: 'Boost Productivity',
            description: 'Advanced automation solutions that optimize processes and increase operational efficiency.',
            icon: '📈'
        }
    ];
}
