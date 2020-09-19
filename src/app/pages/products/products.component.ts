import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../types/migros-product.type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product;

  constructor(private readonly productService: ProductService,
              private route: ActivatedRoute) { }

  async ngOnInit() {

    this.product = await this.productService.getProduct(this.route.snapshot.paramMap.get('productId'));

    this.productService.getRecommendedProducts(this.route.snapshot.paramMap.get('productId')).then(recommendations => {
      console.log('recommendations', recommendations)
    })
  }

}
