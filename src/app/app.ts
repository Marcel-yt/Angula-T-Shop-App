import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from './components/header/header';
import { Container } from './components/container/container';

@Component({
  selector: 'app-root',
  imports: [Header, Container, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop-app');
}
