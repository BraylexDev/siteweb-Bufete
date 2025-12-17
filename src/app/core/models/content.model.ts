/**
 * Interfaces para el contenido del sitio web
 * Basadas en la información del PDF de CAOC
 */

export interface GeneralInfo {
  name: string;
  shortName: string;
  tagline: string;
  nit: string;
  legalStatus: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  email: string;
  phone: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface SiteContent {
  general: GeneralInfo;
  contact: ContactInfo;
  mission: string;
  vision: string;
  objetoSocial: string;
  services: ServiceItem[];
  activities: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavItem {
  path: string;
  label: string;
}