import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcousticGuitarsComponent } from './acoustic-guitars/acoustic-guitars.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { BassGuitarsComponent } from './bass-guitars/bass-guitars.component';
import { ElectricGuitarsComponent } from './electric-guitars/electric-guitars.component';
import { GuitarPageComponent } from './guitar-page/guitar-page.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingTextComponent } from './landing-text/landing-text.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'landingText', component: LandingTextComponent},
  {path: 'all-products', component: AllProductsComponent},
  {path: 'electric-guitars', component: ElectricGuitarsComponent},
  {path: 'acoustic-guitars', component: AcousticGuitarsComponent},
  {path: 'bass-guitars', component: BassGuitarsComponent},
  {path: 'guitar-page/:id', component: GuitarPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
