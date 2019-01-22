import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  product = [];
  updatedProd = [];

  pid ;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val=>{
      this.productService.getProductByCategory(this.route.snapshot.params['id'])
      .subscribe((data:any)=>{
      console.log(data)
      data=this.product.push(data.data);
      this.pid = this.route.snapshot.params['id']
       console.log(this.pid);
      }) // end subscribe
      }) // route end
    
    // this.getProductByCategory();
  }

//Get All ProductBy Category
  // getProductByCategory() {
  //   this.productService.getProductByCategory(this.id)
  //   .subscribe(
  //     (data:any) => {
  //       console.log(data)
  //       this.product.push(data.data);
  //     console.log(data);
  //      }
  //   );

  // }
  
//Get Total Quantity
getTotalPQuantity(){
  return this.productService.getTotalQuantity()
 
}


  //ADD Product to cart

  addToCart(product){
    //get item from localhost
     let cart = JSON.parse(localStorage.getItem('product'))
     console.log(cart)
    //check if cart exist  
    if(cart != null){
      console.log('item exists')
      //loop through all product of cart
      for(let i=0; i<cart.length; i++){
        console.log(cart[i])
        //check if cartProduct Id Matches product id
        if(cart[i].id === product.id){
          cart[i].quantity = cart[i].quantity+1
          this.productService.createCart(cart)

          console.log('Product exists ' + cart[i].id + ' and ' + product.id)
          console.log(typeof(cart[i].id) + ' and ' + typeof(product.id))
          return console.log(cart[i].sub_category_name + ' product already in cart')
        }}
          //if product Id not found
          
          //add quantity to cart
          console.log(cart)
          product.quantity = 1;
          cart.push(product)
          this.productService.createCart(cart)
    }
    //check if cart is null
    else{
      console.log('cart empty')
      //add quantity to cart
      product.quantity = 1;
      this.updatedProd.push(product)
      this.productService.createCart( this.updatedProd)
    }
  }



//get Quantity
getProductQuantity(id){
  return this.productService.getQuantity(id)
 }
  
 //Increase  product quantity
 increaseProductQuantity(product){
   return this.productService.increaseQuantity(product)
 }
 
 //Decrease product Quantity
 decreaseProductQuantity(product){
  return this.productService.decreaseQuantity(product)
   }
 
}