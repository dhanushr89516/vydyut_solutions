import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { routes } from './app.routes';
import {
    // Service icons
    Zap, Cpu, Camera, Gauge, Flame, Building, Sun, Wrench, Network, PencilRuler,
    // Nav / UI
    Shield, TrendingUp, Info, ArrowLeft, ArrowRight, Check, CircleCheck, CircleAlert,
    // Benefit & sidebar icons
    ShieldCheck, TrendingDown, Clock, RefreshCw, Eye, Brain, Smartphone, Lock,
    Target, Database, ClipboardCheck, Bell, Building2, Thermometer, Monitor, Leaf,
    Wifi, Layers, Settings, Lightbulb, Users, DollarSign, Award, FileCheck,
    Phone, Mail, MessageCircle, Star, Factory, Activity
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimations(),
        {
            provide: LUCIDE_ICONS,
            multi: true,
            useValue: new LucideIconProvider({
                // Service vertical icons
                Zap, Cpu, Camera, Gauge, Flame, Building, Sun, Wrench, Network, PencilRuler,
                // UI & Navigation
                Shield, TrendingUp, Info, ArrowLeft, ArrowRight, Check, CircleCheck, CircleAlert,
                // Benefits / detail page icons
                ShieldCheck, TrendingDown, Clock, RefreshCw, Eye, Brain, Smartphone, Lock,
                Target, Database, ClipboardCheck, Bell, Building2, Thermometer, Monitor, Leaf,
                Wifi, Layers, Settings, Lightbulb, Users, DollarSign, Award, FileCheck,
                // Sidebar / contact icons
                Phone, Mail, MessageCircle, Star, Factory, Activity
            })
        }
    ]
};
