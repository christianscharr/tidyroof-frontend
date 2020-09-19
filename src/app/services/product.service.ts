import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Product} from "../types/migros-product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) {
  }

  public async getProduct(id: string): Promise<Product> {
    return await this.http.get<Product>(environment.apiUrl + `/product/${id}`).toPromise();
  }

  public async getRecommendedProducts(id: string) {
    let allergensString = localStorage.getItem(environment.allergens);
    let allergens;
    if (!allergensString) {
      allergens = [];
    } else {
      allergens = JSON.parse(allergensString).map(allergen => this.allergensMap[allergen])
    }
    return this.http.post(environment.apiUrl + `/product/recommended`, {id: id, allergens}).toPromise();
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
