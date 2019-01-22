import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
    declarations:[
        CartComponent,
        ShoppingCartComponent,
        CheckoutComponent
    ],
    imports:[
        CommonModule,
        CartRoutingModule
    ],
    exports:[]
})
export class CartModule{}