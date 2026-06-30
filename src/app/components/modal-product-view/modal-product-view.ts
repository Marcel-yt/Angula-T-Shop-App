import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal-product-view',
  imports: [CommonModule],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
   
  // INPUT : reçoit le produit à afficher 
  product = input<Product>(); 
  
  // OUTPUT : signal au parent de fermer le modal 
  close = output<void>(); 
  
  onCloseClick() { 
    this.close.emit(); 
  }

   // NOUVEAU output : ajout aux favoris 
  favoriteAdded = output<Product>(); 
  
  onAddToFavorites() { 
    const p = this.product(); 
    if (p) { 
      this.favoriteAdded.emit(p); 
    } 
  } 
}
