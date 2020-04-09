import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';
import {Product} from '../product';
import { Location } from '@angular/common';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  products: Product[];
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

    getCategoryProducts(): void{
      const id = +this.route.snapshot.paramMap.get('categoryId');
      this.categoryService.getCategoryProduct(id).subscribe(pRoducts => this.products = pRoducts);
      this.categoryService.getCategory(id).subscribe(categorY => this.category = categorY);
    }

  ngOnInit(): void {
    this.getCategoryProducts();
  }

  goBack(): void{
    this.location.back();
  }

}
