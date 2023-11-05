import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';

const routes: Routes = [
  { path: 'products', component: AddProductTDComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class ProductRoutingModule { }
