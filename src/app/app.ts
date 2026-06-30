import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from './components/header/header';
import { Container } from './components/container/container';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [Header, Container, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('shop-app');

  favoritesCount = signal(0); 
  
  onFavoriteAdded(product: Product) { 
    this.favoritesCount.update(count => count + 1); 
    console.log('Total favoris :', this.favoritesCount()); 
  }
}
