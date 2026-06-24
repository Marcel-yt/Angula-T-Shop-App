import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productitem, Product } from '../productitem/productitem';

@Component({
  selector: 'app-productlist',
  imports: [Productitem, CommonModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  products: Product[] = [
    {
      image: 'assets/images/products/product1.jpeg',
      name: 'Product 1',
      price: 19.99,
    },
    {
      image: 'assets/images/products/product2.jpeg',
      name: 'Product 2',
      price: 29.99,
    },
    {
      image: 'assets/images/products/product1.jpeg',
      name: 'Product 3',
      price: 39.99,
    },
    {
      image: 'assets/images/products/product2.jpeg',
      name: 'Product 4',
      price: 49.99,
    },
    {
      image: 'assets/images/products/product1.jpeg',
      name: 'Product 5',
      price: 59.99,
    },
    {
      image: 'assets/images/products/product2.jpeg',
      name: 'Product 6',
      price: 69.99,
    },
    {
      image: 'assets/images/products/product1.jpeg',
      name: 'Product 7',
      price: 79.99,
    },
    {
      image: 'assets/images/products/product2.jpeg',
      name: 'Product 8',
      price: 89.99,
    },
  ];
}

