import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalVariationQuantity } from '../model/localVariationQuantity';
import { Product } from '../model/product';
import { Variation } from '../model/variation';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: String = "http://localhost:5000/api";

  constructor(private http: HttpClient) {  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProductsForLocation(locationId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/location/${locationId}`);
  }

  getProduct(id: string) {
    return this.http.get<Product[]>(`${this.baseUrl}/products/${id}`);
  }

  getVariations(id: string): Observable<Variation[]> {
    return this.http.get<Variation[]>(`${this.baseUrl}/variations/product/${id}`);
  }

  getVariation(id: string): Observable<Variation> {
    return this.http.get<Variation>(`${this.baseUrl}/variations/${id}`);
  }

  getLocalVariationQuantities(id: string): Observable<LocalVariationQuantity[]> {
    return this.http.get<LocalVariationQuantity[]>(`${this.baseUrl}/localVariationQuantities/${id}`);
  }

}
