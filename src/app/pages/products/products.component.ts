import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../types/migros-product.type";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product;
  recommendations: any;

  constructor(private readonly productService: ProductService,
              private route: ActivatedRoute) { }

  async ngOnInit() {

    this.product = await this.productService.getProduct(this.route.snapshot.paramMap.get('productId'));

    this.recommendations = await this.productService.getRecommendedProducts(this.route.snapshot.paramMap.get('productId'));
  }

  isInAllergen(name: string) {
    let allergensString = localStorage.getItem(environment.allergens);
    let allergens;
    if (!allergensString) {
      allergens = [];
    } else {
      allergens = JSON.parse(allergensString).map(allergen => this.allergensMap[allergen])
    }

    return allergens.includes(name);
  }

  allergensMap = {
    'Haselnüsse': 'ALLG_HASELNU',
    'Sojabohnen': 'ALLG_SOJA',
    'Milch | Laktose': 'ALLG_MILCH',
    'Schwefeldioxid | Sulfite': 'ALLG_SULFIT',
    'Nüsse': 'ALLG_NUESSE',
    'Gluten': 'ALLG_GLUTEN',
    'Eier': 'ALLG_EIER'
  }
}
