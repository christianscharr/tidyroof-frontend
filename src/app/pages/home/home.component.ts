import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getProduct('120215100000');
  }

  handleFileInput(filesToUpload: FileList): void {
    const endpoint = `${environment.apiUrl}/upload`;
    const formData: FormData = new FormData();
    const fileToUpload = filesToUpload[0];

    formData.append('file', fileToUpload, fileToUpload.name);
    this.httpClient
      .post(endpoint, formData).subscribe((e) => this.router.navigate(['/products-list'], {state: {asdf: 32}}));
  }

}
