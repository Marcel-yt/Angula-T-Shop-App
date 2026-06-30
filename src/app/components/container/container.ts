import { Component, output } from '@angular/core';
import { Productlist } from '../productlist/productlist';
import { Product } from '../../models/product';

@Component({
  selector: 'app-container',
  imports: [Productlist],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
   favoriteAdded = output<Product>(); 
  
  onFavoriteAdded(product: Product) { 
    this.favoriteAdded.emit(product); 
  } 
}
