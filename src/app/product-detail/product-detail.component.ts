import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../product';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  form: FormGroup;
  value: Observable <number>;
  product: Product;
  val: number;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.categoryService.getProduct(id).
    subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
  submit(){
    console.log(this.form.value);
    this.product.rating = (this.product.rating + this.form.value.rating)/2;
  }
  ngOnInit(): void {
    this.getProduct();
    this.form = this.formBuilder.group({
      rating: [this.product.rating]
    });
    this.value = this.form.controls.rating.valueChanges;
  } 
}