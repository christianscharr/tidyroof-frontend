import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {ProductService} from '../../services/product.service';
import {Product} from '../../types/migros-product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product;
  recommendations: any;

  constructor(private readonly productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  async ngOnInit() {
    const type = this.route.snapshot.data.type;
    let productId = this.route.snapshot.paramMap.get('productId');

    if (type === 'id') {
      this.product = await this.productService.getProduct(productId);
    } else {
      this.product = await this.productService.getProductByGtin(productId);
    }

    this.setHealthData();

    this.productService.getRecommendedProducts(this.product.id).then(recommendations => {
      console.log('recommendations', recommendations);
    });
    this.recommendations = await this.productService.getRecommendedProducts(this.product.id);
  }

  isInAllergen(name: string) {
    let allergensString = localStorage.getItem(environment.allergens);
    let allergens;
    if (!allergensString) {
      allergens = [];
    } else {
      allergens = JSON.parse(allergensString).map(allergen => this.allergensMap[allergen]);
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
  };

  switchToProduct(id: string) {
    this.router.navigateByUrl(`/product/${id}`).then(() => {
      window.location.reload();
    });
  }

  private setHealthData() {
    let count = 0;

    if (this.product?.healthySugar) {
      document.getElementById('sugar').style.borderColor = '#006d2f';
      document.getElementById('sugar').style.color = '#006d2f';
    } else {
      document.getElementById('sugar').style.borderColor = 'goldenrod';
      document.getElementById('sugar').style.color = 'goldenrod';
    }

    if (this.product?.healthySalt) {
      document.getElementById('salt').style.borderColor = '#006d2f';
      document.getElementById('salt').style.color = '#006d2f';
    } else {
      document.getElementById('salt').style.borderColor = 'goldenrod';
      document.getElementById('salt').style.color = 'goldenrod';
    }

    this.product.allergens.forEach((allergen) => {
      if (this.isInAllergen(allergen.code)) {
        count++;
      }
    });

    if (count === 0) {
      document.getElementById('allergens').style.borderColor = '#006d2f';
      document.getElementById('allergens').style.color = '#006d2f';
    } else {
      document.getElementById('allergens').style.borderColor = '#d22426';
      document.getElementById('allergens').style.color = '#d22426';
    }
  }

  scroll(healthCheck: HTMLSpanElement) {
    healthCheck.scrollIntoView();
  }
}
