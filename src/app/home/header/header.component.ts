import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product;
productId: string;
userstatus;
user;
constructor(
  private router:Router, 
  private productService:ProductService, 
  private authService:AuthService,
  ) { 
  
  }

  ngOnInit() {
    this.getUser()


     this.productService.getCat()
    .subscribe(
      (data:any) =>{
        this.product = data.data
        console.log(this.product)
      }
    )
  }

  getUser(){
    this.user = this.authService.getCurrentUser()
    console.log(this.user)
    if(this.user != undefined){
      this.userstatus = true
    }else{
    this.userstatus = false
    }
    
  }

  isValid(){
    if(this.router.url != '/'){
      return true
    }
      return false
  }
//Get Total Quantity
getTotalPQuantity(){
 return this.productService.getTotalQuantity()
 
}

  
}
