import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { LocalVariationQuantity } from '../model/localVariationQuantity';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-local-variation-quantities',
  templateUrl: './local-variation-quantities.component.html',
  styleUrls: ['./local-variation-quantities.component.css']
})
export class LocalVariationQuantitiesComponent implements OnInit {
  variationId: string | undefined;
  localVariationQuantities$: Observable<LocalVariationQuantity[]> | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { 
  }

  ngOnInit(): void {
    this.localVariationQuantities$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.getLocalVariationQuantities(params.get('id')!))
    );
  }

}
