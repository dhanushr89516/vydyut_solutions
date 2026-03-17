import { Injectable } from '@angular/core';
import { SERVICE_VERTICALS, ServiceVertical } from '../data/services.data';

@Injectable({
    providedIn: 'root'
})
export class ServiceDataService {

    getAllServices(): ServiceVertical[] {
        return SERVICE_VERTICALS;
    }

    getServiceById(id: string): ServiceVertical | undefined {
        return SERVICE_VERTICALS.find(service => service.id === id);
    }

    getServicesByIds(ids: string[]): ServiceVertical[] {
        return SERVICE_VERTICALS.filter(service => ids.includes(service.id));
    }
}
