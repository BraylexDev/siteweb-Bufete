import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../../core/services/content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  
  // Información del sitio
  generalInfo: any;
  contactInfo: any;
  currentYear: number;

  constructor(private contentService: ContentService) {
    this.generalInfo = this.contentService.getGeneralInfo();
    this.contactInfo = this.contentService.getContactInfo();
    this.currentYear = new Date().getFullYear();
  }
  
  

}
