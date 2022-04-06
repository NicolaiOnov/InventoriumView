import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';
import { VariationsComponent } from './variations/variations.component';
import { LocalVariationQuantitiesComponent } from './local-variation-quantities/local-variation-quantities.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    VariationsComponent,
    LocalVariationQuantitiesComponent,
    LocationsComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
