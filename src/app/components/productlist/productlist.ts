import { Component, signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { Productitem } from '../productitem/productitem';
import { ModalProductView } from '../modal-product-view/modal-product-view';

@Component({
  selector: 'app-productlist',
  imports: [CommonModule, Productitem, ModalProductView],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {

  products = signal<Product[]>([ 
    { 
      id: 1, 
      name: 'Robe traditionnelle', 
      description: 'Tissée à la main, motifs Bamiléké', 
      soldPrice: 22000, 
      regularPrice: 28000, 
      imageUrl: '/assets/images/products/product1.jpg', 
      createdAt: new Date('2026-01-15'), 
      categories: ['vêtement', 'femme', 'traditionnel'] 
    }, 
    { 
      id: 2, 
      name: 'Sac en raphia', 
      description: 'Tressé en fibre de raphia, original', 
      soldPrice: 10000, 
      regularPrice: 12000, 
      imageUrl: '/assets/images/products/product2.jpg', 
      createdAt: new Date('2026-02-10'), 
      categories: ['accessoire', 'artisanat'] 
    }, 
    { 
      id: 3, 
      name: 'Robe traditionnelle', 
      description: 'Tissée à la main, motifs Bamiléké', 
      soldPrice: 22000, 
      regularPrice: 28000, 
      imageUrl: '/assets/images/products/product1.jpg', 
      createdAt: new Date('2026-01-15'), 
      categories: ['vêtement', 'femme', 'traditionnel'] 
    }, 
    { 
      id: 4, 
      name: 'Sac en raphia', 
      description: 'Tressé en fibre de raphia, original', 
      soldPrice: 10000, 
      regularPrice: 12000, 
      imageUrl: '/assets/images/products/product2.jpg', 
      createdAt: new Date('2026-02-10'), 
      categories: ['accessoire', 'artisanat'] 
    }, 
    { 
      id: 5, 
      name: 'Robe traditionnelle', 
      description: 'Tissée à la main, motifs Bamiléké', 
      soldPrice: 22000, 
      regularPrice: 28000, 
      imageUrl: '/assets/images/products/product1.jpg', 
      createdAt: new Date('2026-01-15'), 
      categories: ['vêtement', 'femme', 'traditionnel'] 
    }, 
    { 
      id: 6, 
      name: 'Sac en raphia', 
      description: 'Tressé en fibre de raphia, original', 
      soldPrice: 10000, 
      regularPrice: 12000, 
      imageUrl: '/assets/images/products/product2.jpg', 
      createdAt: new Date('2026-02-10'), 
      categories: ['accessoire', 'artisanat'] 
    }, 
    { 
      id: 7, 
      name: 'Robe traditionnelle', 
      description: 'Tissée à la main, motifs Bamiléké', 
      soldPrice: 22000, 
      regularPrice: 28000, 
      imageUrl: '/assets/images/products/product1.jpg', 
      createdAt: new Date('2026-01-15'), 
      categories: ['vêtement', 'femme', 'traditionnel'] 
    }, 
    { 
      id: 8, 
      name: 'Sac en raphia', 
      description: 'Tressé en fibre de raphia, original', 
      soldPrice: 10000, 
      regularPrice: 12000, 
      imageUrl: '/assets/images/products/product2.jpg', 
      createdAt: new Date('2026-02-10'), 
      categories: ['accessoire', 'artisanat'] 
    }, 
  ]); 
   // État du modal 
  isDisplayModal = signal(false); 
  modalProduct = signal<Product | undefined>(undefined); 
  
  // Méthode appelée quand un produit est cliqué 
  onDisplayProductViewModal(product: Product) { 
    this.modalProduct.set(product); 
    this.isDisplayModal.set(true); 
  } 
  
  // Méthode appelée quand le modal demande à être fermé 
  onCloseModal() { 
    this.isDisplayModal.set(false); 
    this.modalProduct.set(undefined); 
  }
  
   // NOUVEAU output : retransmet vers App 
  favoriteAdded = output<Product>(); 
  
  // Méthode appelée quand le modal ajoute aux favoris 
  onFavoriteAdded(product: Product) { 
    console.log('Favori ajouté :', product.name); 
    this.favoriteAdded.emit(product); 
  } 
}

