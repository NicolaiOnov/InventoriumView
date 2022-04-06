import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalVariationQuantitiesComponent } from './local-variation-quantities/local-variation-quantities.component';
import { LocationComponent } from './location/location.component';
import { ProductsComponent } from './products/products.component';
import { VariationsComponent } from './variations/variations.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'variations/:id', component: VariationsComponent },
  { path: 'localVariationQuantities/:id', component: LocalVariationQuantitiesComponent },
  { path: 'locations/:id', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
