import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  quantity:number = 1; 
  base_url = 'http://www.petukibiryani.com/pos/api/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',     })
  };

// Get All Product By Category
  getCat() {
    return this.http.get( this.base_url + 'v1/App/Category/');
    }

// Get All Product By Sub Category

getProductByCategory(id) {
 return this.http.post( this.base_url +  '/v1/App/Category/subcategory/',  "category_id=" + encodeURIComponent(id), this.httpOptions)
  
}

//Create a shopping cart
createCart(product){
 localStorage.setItem('product', JSON.stringify(product))

}
/*============================================
GET QUANTITY
=============================================*/
getQuantity(id){
  let item = JSON.parse(localStorage.getItem('product'));
  let pquantity = 0 ;
  // console.log(item)
  //check if item exists in cart
  if(item !== null){
    //loop through all item in cart
    for(let i=0; i<item.length; i++){
      if(item[i].id == id){
      pquantity += item[i].quantity
      //  console.log(pquantity)
    }   
   }
 
    }

  return pquantity 

}
/*==============================================
GET TOTAL CART PRICE
===============================================*/
getTotalCartPrice(){
  let item = JSON.parse(localStorage.getItem('product'));
  let cartTotal = 0;
  // console.log(item)
  //check if item exists in cart
  if(item !== null){
    //loop through all item in cart
    for(let i=0; i<item.length; i++){
      cartTotal += this.getQuantity(item[i].id) * item[i].base_price 
    
   }
 
    }

  return cartTotal 

}

/*====================================================
INCREASE QUANTITY
=====================================================*/

increaseQuantity(product){
  let item = JSON.parse(localStorage.getItem('product'));
  // let updatedCart = [];
  //loop through all item in cart
  for(let i=0; i<item.length; i++){
    if(item[i].id == product.id){
    // item[i].quantity += item[i].quantity
    item[i].quantity = item[i].quantity+1
     console.log(item)
    this.createCart(item)

  }   
}

}

/*========================================================
DECREASE QUANTITY
========================================================*/
decreaseQuantity(product){
 
  let item = JSON.parse(localStorage.getItem('product'));
  // let updatedCart = [];
  //loop through all item in cart
  for(let i=0; i<item.length; i++){
    if(item[i].id == product.id ){
      if(item[i].quantity <= 0){
        return
      }
    item[i].quantity = item[i].quantity-1
     console.log(item)
    this.createCart(item)
  }
     
}
  }

/*===================================================
GET TOTAL QUANTITY
===================================================*/
getTotalQuantity(){
  let item = JSON.parse(localStorage.getItem('product'));
  let totalQuantity = 0 ;

  if(item !== null){
  for(let i=0; i<item.length; i++){
    totalQuantity += item[i].quantity
  }}else{
    return totalQuantity
  }
  return totalQuantity

}

}
