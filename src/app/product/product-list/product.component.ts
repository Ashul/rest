import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductListComponent implements OnInit {
product = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCat();
  }
getCat() {
  this.productService.getCat()
  .subscribe((data: any) => {
    this.product.push(data.data);
    console.log(this.product); });
}
}
