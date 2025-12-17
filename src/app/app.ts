import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { ScrollTop } from './shared/components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CAOC - Ramírez y Hernández Abogados');
}
