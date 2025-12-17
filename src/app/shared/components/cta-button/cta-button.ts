import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a *ngIf="routerLink" 
       [routerLink]="routerLink"
       [ngClass]="buttonClasses"
       class="inline-block text-center">
      {{ text }}
    </a>
    
    <a *ngIf="href && !routerLink"
       [href]="href"
       [ngClass]="buttonClasses"
       class="inline-block text-center">
      {{ text }}
    </a>
    
    <button *ngIf="!routerLink && !href"
            [type]="type"
            [ngClass]="buttonClasses"
            [disabled]="disabled">
      {{ text }}
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class CtaButton {
  @Input() text: string = 'Botón';
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  
  get buttonClasses(): string {
    const base = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const width = this.fullWidth ? 'w-full' : '';
    const disabled = this.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg transform hover:-translate-y-0.5';
    
    const variant = this.variant === 'primary' 
      ? 'bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-500'
      : 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500';
    
    return `${base} ${width} ${disabled} ${variant}`;
  }
}
