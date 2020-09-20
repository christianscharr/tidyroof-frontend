import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ScanditSdkModule} from 'scandit-sdk-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavOverlayComponent } from './components/nav-overlay/nav-overlay.component';
import { environment } from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './pages/products/products.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import {PwaService} from "./services/pwa.service";
import { ScannerComponent } from './pages/scanner/scanner.component';
import {TruncatePipe} from "./truncate.pipe";

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavOverlayComponent,
    ProductsComponent,
    SettingsComponent,
    ProductsListComponent,
    ScannerComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScanditSdkModule.forRoot(environment.scandit, {engineLocation: 'assets/'}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PwaService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

