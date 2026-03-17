import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router, Params } from '@angular/router';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceVertical } from '../../data/services.data';
import { LucideAngularModule } from 'lucide-angular';

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

            // Get related services (exclude current service, show 3)
            this.relatedServices = this.serviceDataService
                .getAllServices()
                .filter(s => s.id !== id)
                .slice(0, 3);
        });
    }
}
