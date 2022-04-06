import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Variation } from '../model/variation';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-variations',
  templateUrl: './variations.component.html',
  styleUrls: ['./variations.component.css']
})
export class VariationsComponent implements OnInit {
  productId: number = 0;
  variations$: Observable<Variation[]> | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.variations$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.productService.getVariations(params.get('id')!))
    );
  }

}
