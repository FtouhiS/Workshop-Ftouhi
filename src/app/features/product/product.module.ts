import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { ProductRoutingModule } from './product-routing.module';
import { AddProductTDComponent } from 'src/app/features/product/add-product-td/add-product-td.component';


@NgModule({
  declarations: [AddProductTDComponent],
  imports: [CommonModule, FormsModule,ProductRoutingModule], // Assurez-vous d'importer FormsModule ici
})
export class ProductModule {}
