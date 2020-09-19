import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../types/migros-product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  public async getProduct(id: string) {
    return await this.http.get(environment.apiUrl + `/product/${id}`).toPromise();
  }

}
