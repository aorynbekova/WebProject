import { Injectable } from '@angular/core';
import { Product} from './product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
    items = [];
    addToCart(Product) {
        this.items.push(Product);
    }
    
    getItems() {
        return this.items;
    }
    
    clearCart() {
        this.items = [];
        return this.items;
    }
    constructor() {}

}