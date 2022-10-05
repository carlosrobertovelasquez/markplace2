import { HomeFeaturesComponent } from './pages/home/home-features/home-features.component';
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { Error404Component } from './pages/error404/error404.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NewletterComponent } from './modules/newletter/newletter.component';
import { HeaderMobileComponent } from './modules/header-mobile/header-mobile.component';
import { HeaderPromotionComponent } from './modules/header-promotion/header-promotion.component';
import { HeaderComponent } from './modules/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPromotionComponent,
    HeaderMobileComponent,
    NewletterComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    Error404Component,
    HomeBannerComponent,
    HomeFeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
