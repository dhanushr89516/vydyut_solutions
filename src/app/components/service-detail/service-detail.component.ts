import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router, Params } from '@angular/router';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceVertical } from '../../data/services.data';
import { LucideAngularModule } from 'lucide-angular';
import { CONTACT_INFO } from '../../constants/contact.constants';

@Component({
    selector: 'app-service-detail',
    standalone: true,
    imports: [CommonModule, RouterLink, LucideAngularModule],
    templateUrl: './service-detail.component.html',
    styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
    service: ServiceVertical | undefined;
    relatedServices: ServiceVertical[] = [];
    contactInfo = CONTACT_INFO;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private serviceDataService: ServiceDataService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            const id = params['id'];
            this.service = this.serviceDataService.getServiceById(id);

            if (!this.service) {
                this.router.navigate(['/services']);
                return;
            }

            // Scroll to top when service details are loaded
            window.scrollTo(0, 0);

            // Get related services (exclude current service, show 3)
            this.relatedServices = this.serviceDataService
                .getAllServices()
                .filter(s => s.id !== id)
                .slice(0, 3);
        });
    }

    navigateToContact() {
        this.router.navigate(['/contact']);
        window.scrollTo(0, 0);
    }

    navigateToServices() {
        this.router.navigate(['/services']);
        window.scrollTo(0, 0);
    }
}
