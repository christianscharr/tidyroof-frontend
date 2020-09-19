import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  public async getProduct(id: string) {
    await this.http.get(environment.apiUrl + `/product/${id}`).toPromise().then((data => {
      // ToDo: Implement data handling
    }))
  }

}
