import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavItem } from '../../../core/models/content.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Estado del menú móvil
  mobileMenuOpen = false;
  
  // Items de navegación
  navItems: NavItem[] = [
    { path: '/inicio', label: 'Inicio' },
    { path: '/nosotros', label: 'Quiénes Somos' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/contacto', label: 'Contacto' }
  ];
  
  constructor(private router: Router) {}
  
  /**
   * Alterna el estado del menú móvil
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  /**
   * Cierra el menú móvil al navegar
   */
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
  
  /**
   * Navega al inicio
   */
  navigateHome(): void {
    this.router.navigate(['/inicio']);
    this.closeMobileMenu();
  }
}
