import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      *ngIf="isVisible" 
      (click)="scrollToTop()" 
      class="scroll-btn justify-items-center"
      aria-label="Volver arriba">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  `,
  styles: [`
    .scroll-btn {
      position: fixed;
      bottom: 40px;
      right: 40px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #05294fff;
      color: white;
      border: none;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      transition: opacity 0.3s ease-in-out;
      z-index: 1000;
    }
    .scroll-btn:hover { background-color: #0056b3; }
  `]
})
export class ScrollTop {
  isVisible = false;

  // Detecta el desplazamiento de la ventana
  @HostListener('window:scroll')
  onWindowScroll() {
    // Muestra el botón si el scroll es mayor a 350px
    this.isVisible = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento animado suave
    });
  }
}
