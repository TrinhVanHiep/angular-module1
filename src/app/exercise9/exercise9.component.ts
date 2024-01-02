import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-exercise9',
  standalone: true,
  imports: [],
  templateUrl: './exercise9.component.html',
  styleUrl: './exercise9.component.scss'
})
export class Exercise9Component implements OnInit {
  products: Product[] = [];
  productsValue: number = 0;
  filteredProducts: Product[] = [];
  productsDescription: string[] = [];
  filteredProductsPrice: number = 0;
  discountedProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productsValue = this.productService.getProductsValue(this.products);
    this.filteredProducts = this.productService.filterProducts(this.products);
    this.productsDescription = this.productService.getProductsDescription(
      this.products
    );
    this.filteredProductsPrice = this.productService.filterProductsPrice(
      this.products
    );
    this.discountedProducts = this.productService.getDiscountedProducts(
      this.products,
      50
    );
  }

  displayJson(data: any): string {
    return JSON.stringify(data, null, 2);
  }
}
