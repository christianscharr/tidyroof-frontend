import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../types/migros-product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product;

  constructor(private readonly productService: ProductService) { }

  async ngOnInit() {

    this.product = await this.productService.getProduct('205214100000');

    this.productService.getRecommendedProducts('205214100000').then(recommendations => {
      console.log('recommendations', recommendations)
    })

  }

}
