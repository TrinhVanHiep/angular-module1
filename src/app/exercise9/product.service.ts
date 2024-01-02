import { Injectable } from '@angular/core';
export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private productsList: Product[] = [
        {
            id: 1,
            name: 'Product 1',
            price: 50,
            quantity: 20,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 100,
            quantity: 40,
        },
        {
            id: 3,
            name: 'Product 3',
            price: 200,
            quantity: 60,
        },
        {
            id: 4,
            name: 'Product 4',
            price: 300,
            quantity: 80,
        },
        {
            id: 5,
            name: 'Product 5',
            price: 400,
            quantity: 100,
        },
    ];

    getProducts(): Product[] {
        return this.productsList;
    }

    getProductsValue(products: Product[]): number {
        return products.reduce(
            (acc: number, curr: Product) => acc + curr.price * curr.quantity,
            0
        );
    }

    filterProducts(products: Product[]): Product[] {
        return products.filter((p: Product) => p.price > 100);
    }

    getProductsDescription(products: Product[]): string[] {
        return products.map(
            (p: Product) =>
                `Sản phẩm ${p.name} có giá ${p.price} đồng và còn ${p.quantity} sản phẩm.`
        );
    }

    filterProductsPrice(products: Product[]): number {
        return products.reduce(
            (acc: number, curr: Product) =>
                acc + (curr.price > 100 ? curr.price : 0),
            0
        );
    }

    getDiscountedProducts(products: Product[], discount: number): Product[] {
        return products.map((p: Product) => ({
            ...p,
            price: p.price - p.price * (discount / 100),
        }));
    }
}
