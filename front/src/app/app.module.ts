import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { RegistrationComponent } from './registration/registration.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { HttpClientModule } from '@angular/common/http'
//import { NgpSortModule } from "ngp-sort-pipe"
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ProductsComponent,
    ProductDetailComponent,
    TopbarComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ArticlesComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxInputStarRatingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }