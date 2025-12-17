import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SiteContent, ContactForm } from '../models/content.model';
import { SITE_CONTENT } from '../../shared/data/site-content';

/**
 * Servicio centralizado para gestionar el contenido del sitio
 * Proporciona acceso a la información institucional y gestiona formularios
 */
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  /**
   * Obtiene todo el contenido del sitio
   */
  getSiteContent(): Observable<SiteContent> {
    return of(SITE_CONTENT);
  }
  
  /**
   * Obtiene la información general de la corporación
   */
  getGeneralInfo() {
    return SITE_CONTENT.general;
  }
  
  /**
   * Obtiene la información de contacto
   */
  getContactInfo() {
    return SITE_CONTENT.contact;
  }
  
  /**
   * Obtiene los servicios ofrecidos
   */
  getServices() {
    return SITE_CONTENT.services;
  }
  
  /**
   * Obtiene las actividades principales
   */
  getActivities() {
    return SITE_CONTENT.activities;
  }
  
  /**
   * Obtiene misión y visión
   */
  getMissionVision() {
    return {
      mission: SITE_CONTENT.mission,
      vision: SITE_CONTENT.vision
    };
  }
  
  /**
   * Envía el formulario de contacto
   * En producción, esto debe conectarse a un backend real
   */
  submitContactForm(formData: ContactForm): Observable<boolean> {
    // Simulación de envío
    console.log('Formulario recibido:', formData);
    
    // En producción, aquí iría una llamada HTTP:
    // return this.http.post<boolean>('/api/contact', formData);
    
    // Por ahora retornamos éxito simulado
    return of(true);
  }
  
  /**
   * Valida el formato de email
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Valida el formato de teléfono colombiano
   */
  validatePhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{7,10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }
}