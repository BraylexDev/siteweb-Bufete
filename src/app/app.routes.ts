import { Routes } from '@angular/router';

/**
 * Configuración de rutas principales del sitio
 * Angular 19 usa standalone components por defecto
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Inicio'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
    title: 'Quiénes Somos '
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
    title: 'Servicios'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contacto'
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];