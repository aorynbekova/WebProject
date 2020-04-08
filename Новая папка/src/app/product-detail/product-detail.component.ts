import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.categoryService.getProduct(id).
    subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getProduct();
  }

}