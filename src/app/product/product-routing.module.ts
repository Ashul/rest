import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductMainComponent } from './product-main.component';

const productRoutes:Routes = [
    {path:'', component:ProductMainComponent, children:[
        {path: '', component: ProductListComponent },
        {path: ':id', component: ProductCategoryComponent}

    ]}
  
]
@NgModule({
imports:[RouterModule.forChild(productRoutes)],
exports:[RouterModule]
})

export class ProductRoutingModule{}