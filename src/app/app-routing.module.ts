import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', loadChildren:'./cart/cart.module#CartModule'},
  {path:'product', loadChildren:'./product/product.module#ProductModule'},
  {path:'privacy', loadChildren:'./privacy/privacy.module#PrivacyModule'},
  {path:'auth', loadChildren:'./auth/auth.module#AuthModule'},
  {path:'**', component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
