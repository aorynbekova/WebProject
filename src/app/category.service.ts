import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, CATEGORIES } from './category';
import { Product, PRODUCTS } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategories(): Observable<Category[]>{
    return of(CATEGORIES);
  }

  getCategory(id: number): Observable<Category>{
    return of(CATEGORIES.find(category => category.id === id));
  }

  getCategoryProduct(id: number): Observable<Product[]>{
    return of(PRODUCTS.filter(product => product.category_id === id));
  }

  getProduct(id: number): Observable<Product>{
    return of(PRODUCTS.find(product => product.id === id));
  }
  constructor() { }
}
