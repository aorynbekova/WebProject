import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, CATEGORIES } from './category';
import { Product, PRODUCTS } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:8000/api/categories/')
  }

  getCategory(id: number): Observable<Category>{
    return of(CATEGORIES.find(category => category.id === id));
  }

  getCategoryProduct(id: number): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8000/api/categories/'+id+'/products/')
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>('http://localhost:8000/api/products/'+id)
  }

  addToCart(id, user): Observable<any> {
    return this.http.post('http://localhost:8000/api/order'+id+'/', user, this.headers)
  }
}
