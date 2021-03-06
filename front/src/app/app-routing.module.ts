import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component'
import { CartComponent } from './cart/cart.component'
import { ArticlesComponent } from './articles/articles.component'
import { NewsPageComponent } from './news-page/news-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:categoryId/products', component: CategoryDetailComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'news/:id', component: NewsPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };