import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Product} from '../../types/migros-product.type';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  loading: boolean = true;
  products: Product[] = [];

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    if (history.state.file !== undefined) {
      const file = history.state.file;
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const endpoint = `${environment.apiUrl}/product/upload`;

      this.httpClient
        .post<Product[]>(endpoint, formData)
        .pipe(
          catchError((err => {
            console.error(err);
            this.router.navigate(['/']);
            return of([]);
          })))
        .subscribe((data) => {
          this.loading = false;
          this.products = data;
        });
    } else {
      this.router.navigate(['/']);
    }
  }

}
