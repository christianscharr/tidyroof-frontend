import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductsComponent} from './pages/products/products.component';
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'product/:productId', component: ProductsComponent
  },
  {
    path: 'products-list', component: ProductsListComponent
  },
  {
    path: 'settings', component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
