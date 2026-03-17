import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceVertical } from '../../data/services.data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, RouterLink, LucideAngularModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    services: ServiceVertical[] = [];

    constructor(private serviceDataService: ServiceDataService) {
        this.services = this.serviceDataService.getAllServices();
    }
}
