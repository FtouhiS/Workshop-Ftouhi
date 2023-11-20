import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { AddProductRFComponentComponent } from './add-product-rfcomponent/add-product-rfcomponent.component';

const routes: Routes = [
  { path: 'products', component: AddProductTDComponent },
  { path: 'addReactive', component:AddProductRFComponentComponent  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class ProductRoutingModule { }
