import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductsComponent} from './pages/products/products.component';
import {ScannerComponent} from './pages/scanner/scanner.component';
import {SettingsComponent} from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'product/:productId', component: ProductsComponent, data: {type: 'id'}
  },
  {
    path: 'product/gtin/:productId', component: ProductsComponent, data: {type: 'gtin'}
  },
  {
    path: 'products-list', component: ProductsListComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'scanner', component: ScannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
