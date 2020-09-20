import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {ProductService} from '../../services/product.service';
import {PwaService} from "../../services/pwa.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blindMode: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private productService: ProductService,
    private router: Router,
    public pwaService: PwaService) {
  }

  ngOnInit(): void {
    this.productService.getProduct('120215100000');
    this.blindMode = localStorage.getItem(environment.blindMode)  === 'true';
  }

  handleFileInput(filesToUpload: FileList): void {


    this.router.navigate(['/products-list'], {state: {file: filesToUpload[0]}});

  }

}
