import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importez FormsModule ici
import { ProductRoutingModule } from './product-routing.module';
import { AddProductTDComponent } from 'src/app/features/product/add-product-td/add-product-td.component';
import { AddProductRFComponentComponent } from './add-product-rfcomponent/add-product-rfcomponent.component';


@NgModule({
  declarations: [AddProductTDComponent, AddProductRFComponentComponent],
  imports: [CommonModule, FormsModule,ProductRoutingModule,ReactiveFormsModule] // Assurez-vous d'importer FormsModule ici
})
export class ProductModule {}
