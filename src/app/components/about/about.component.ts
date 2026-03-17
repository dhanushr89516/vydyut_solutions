import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    values = [
        {
            title: 'Safety First',
            description: 'We prioritize safety in every project, ensuring compliance with all industry standards and regulations.',
            icon: '🛡️'
        },
        {
            title: 'Quality Excellence',
            description: 'Delivering superior quality through rigorous testing, certified components, and skilled workmanship.',
            icon: '⭐'
        },
        {
            title: 'Innovation',
            description: 'Leveraging cutting-edge technology and innovative solutions to solve complex industrial challenges.',
            icon: '💡'
        },
        {
            title: 'Customer Focus',
            description: 'Building long-term partnerships through responsive service and customized solutions.',
            icon: '🤝'
        }
    ];

    certifications = [
        'ISO 9001:2015 Certified',
        'GST Registered',
        'MSME Certified',
        'Udyam Registration',
        'Electrical Contractor License',
        'Safety Compliance Certified'
    ];
}
