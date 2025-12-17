import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ServiceItem } from '../../core/models/content.model';
import { CtaButton } from '../../shared/components/cta-button/cta-button';

@Component({
  selector: 'app-home',
 standalone: true,
  imports: [CommonModule, RouterModule, CtaButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  generalInfo: any;
  services: ServiceItem[] = [];
  
  constructor(private contentService: ContentService) {}
  
  ngOnInit(): void {
    this.generalInfo = this.contentService.getGeneralInfo();
    this.services = this.contentService.getServices();
  }
  
  /**
   * Obtiene el ícono SVG según el tipo
   */
  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      'scale': 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      'file-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      'book-open': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      'users': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      'heart': 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      'trending-up': 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    };
    return icons[iconName] || icons['scale'];
  }
}
