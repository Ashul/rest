import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { NotfoundComponent } from '../notfound/notfound.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    HeaderComponent,
    HomeComponent, 
    FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule.forRoot()

  ],
  exports:[
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
