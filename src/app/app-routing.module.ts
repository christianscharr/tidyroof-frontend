import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProductsComponent} from "./pages/products/products.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'product', component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
