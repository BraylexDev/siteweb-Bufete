import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { CtaButton } from '../../shared/components/cta-button/cta-button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CtaButton],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  generalInfo: any;
  mission: string = '';
  vision: string = '';
  objetoSocial: string = '';
  objetoSocialParagraphs: string[] = [];
  
  constructor(private contentService: ContentService) {
    this.generalInfo = this.contentService.getGeneralInfo();
  }
  
  ngOnInit(): void {
    const missionVision = this.contentService.getMissionVision();
    this.mission = missionVision.mission;
    this.vision = missionVision.vision;
    
    // Obtener objeto social
    this.contentService.getSiteContent().subscribe(content => {
      this.objetoSocial = content.objetoSocial;
      // Dividir en párrafos para mejor presentación
      this.objetoSocialParagraphs = this.objetoSocial.split('\n\n').filter(p => p.trim());
    });
  }
}
