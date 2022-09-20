import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingTextComponent } from './landing-text/landing-text.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HeaderOutComponent } from './header-out/header-out.component';
import { ProductsNavComponent } from './products-nav/products-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ElectricGuitarsComponent } from './electric-guitars/electric-guitars.component';
import { AcousticGuitarsComponent } from './acoustic-guitars/acoustic-guitars.component';
import { BassGuitarsComponent } from './bass-guitars/bass-guitars.component';
import { GuitarPageComponent } from './guitar-page/guitar-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    LandingTextComponent,
    AllProductsComponent,
    HeaderOutComponent,
    ProductsNavComponent,
    ElectricGuitarsComponent,
    AcousticGuitarsComponent,
    BassGuitarsComponent,
    GuitarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
