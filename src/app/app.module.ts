import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavOverlayComponent } from './components/nav-overlay/nav-overlay.component';
import { CameraCaptureComponent } from './components/camera-capture/camera-capture.component';
import { environment } from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import { CameraComponent } from './pages/camera/camera.component';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavOverlayComponent,
    CameraCaptureComponent,
    CameraComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    WebcamModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

