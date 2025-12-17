import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContentService } from '../../core/services/content.service';
import { CtaButton } from '../../shared/components/cta-button/cta-button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactInfo: any;
  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  
  constructor(
    private fb: FormBuilder,
    private contentService: ContentService
  ) {
    this.contactInfo = this.contentService.getContactInfo();
    // Inicializar formulario con validaciones
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{7,10}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  /**
   * Getter para acceder fácilmente a los controles del formulario
   */
  get f() {
    return this.contactForm.controls;
  }
  
  /**
   * Maneja el envío del formulario
   */
  onSubmit(): void {
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = false;
    
    // Detener si el formulario es inválido
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    // Enviar datos del formulario
    this.contentService.submitContactForm(this.contactForm.value).subscribe({
      next: (success) => {
        this.isSubmitting = false;
        if (success) {
          this.submitSuccess = true;
          this.contactForm.reset();
          this.submitted = false;
          
          // Ocultar mensaje de éxito después de 5 segundos
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        } else {
          this.submitError = true;
        }
      },
      error: (error) => {
        console.error('Error al enviar formulario:', error);
        this.isSubmitting = false;
        this.submitError = true;
      }
    });
  }
  
  /**
   * Verifica si un campo tiene errores y ha sido tocado
   */
  hasError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  
  /**
   * Obtiene el mensaje de error para un campo específico
   */
  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    
    if (field?.hasError('email')) {
      return 'Por favor ingresa un correo electrónico válido';
    }
    
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `Debe tener al menos ${minLength} caracteres`;
    }
    
    if (field?.hasError('pattern')) {
      if (fieldName === 'phone') {
        return 'Por favor ingresa un número de teléfono válido (7-10 dígitos)';
      }
    }
    
    return '';
  }
}
