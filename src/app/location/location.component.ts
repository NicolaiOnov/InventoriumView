import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationId: string | undefined;
  products$: Observable<Product[]> | undefined;
  
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.getProductsForLocation(params.get('id')!))
    );
  }

}
