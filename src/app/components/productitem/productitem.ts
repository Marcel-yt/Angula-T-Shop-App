import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export interface Product {
  image: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-productitem',
  imports: [DecimalPipe],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  @Input() product!: Product;
}

