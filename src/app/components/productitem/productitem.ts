import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productitem',
  imports: [CommonModule,],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  // Input OPTIONNEL (peut être undefined) 
  product = input.required<Product>(); 
  // Input OBLIGATOIRE (Angular plante si non fourni) 
  // product = input.required<Product>(); 

  // Output qui émet un objet Product 
  productClicked = output<Product>(); 
  
  // Output : signal vers le parent qu'on a cliqué 
  displayProductViewModal = output<Product>(); 

  // Méthode unique appelée lors du clic
  onProductClick() { 
    this.productClicked.emit(this.product()); 
    this.displayProductViewModal.emit(this.product());
  } 
}

