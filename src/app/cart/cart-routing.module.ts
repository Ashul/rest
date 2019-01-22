import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart.component';

const cartRoutes:Routes=[
    {path:'', component:CartComponent, children:[
        {path:'shoping-cart', component:ShoppingCartComponent,},
        {path:'checkout', component:CheckoutComponent}
    ]}
]
@NgModule({
    imports:[RouterModule.forChild(cartRoutes)],
    exports:[RouterModule]
})
export class CartRoutingModule{}