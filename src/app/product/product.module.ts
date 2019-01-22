import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductMainComponent } from './product-main.component';


@NgModule({
    declarations:[
        ProductMainComponent,
        ProductListComponent,
        ProductCategoryComponent
    ],
    imports:[
        CommonModule,
        ProductRoutingModule
    ],
    exports:[]
})

export class ProductModule{}