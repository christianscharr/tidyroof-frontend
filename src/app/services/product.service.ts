import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) {
  }

  public async getProduct(id: string) {
    return await this.http.get(environment.apiUrl + `/product/${id}`).toPromise();
  }

}
