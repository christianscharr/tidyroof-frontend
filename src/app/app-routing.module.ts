import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CameraComponent} from './pages/camera/camera.component';
import {HomeComponent} from './pages/home/home.component';
import {ProductsComponent} from "./pages/products/products.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'camera', component: CameraComponent
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
