import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product/product.service';
import { HomeModule } from './home/home.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    
  ],
  providers: [ProductService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
