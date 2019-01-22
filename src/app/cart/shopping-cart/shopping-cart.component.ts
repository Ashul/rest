import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
cartItem;
user = null
  constructor(
    private productService:ProductService, 
    private router:Router,
    ) { }

  ngOnInit() {
    this.GetCartItem()
  }
GetCartItem(){
  console.log(localStorage.getItem('product'))
  return this.cartItem = JSON.parse(localStorage.getItem('product'))
}

//get Quantity
getProductQuantity(id){
 return this.productService.getQuantity(id)
}

//get Total Cart Price
getTotalCartProductPrice(){
  return this.productService.getTotalCartPrice()

}

//Increase  product quantity
increaseProductQuantity(product){
  this.productService.increaseQuantity(product)
}

//Decrease product Quantity
decreaseProductQuantity(product){
 this.productService.decreaseQuantity(product)
  }

//check logedin user then checkout
productCheckout(){
  this.user = localStorage.getItem('username')
  if(this.user == null){
    console.log(this.user)
    this.router.navigate(['/auth/signin'])
  }else{
    this.router.navigate(['/cart/checkout'])
  }
}
}
