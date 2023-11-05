import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/product';
import { ProduitService } from '../../../services/produit.service';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent {
  product: Product = new Product();
  showAdditionalFields: boolean = false;
  isDateCreationValid: boolean = false;

  constructor(private prodServ: ProduitService, private router: Router) {}

  add(myForm: NgForm) {
    console.log(myForm);
    console.log(this.product);
    this.prodServ.addProduit(this.product).subscribe(
      () => this.router.navigate(['product/products'])
    );
  }
  toggleAdditionalFields() {
    this.showAdditionalFields = true;
  }
  onDateCreationChange() {
    this.isDateCreationValid = true;
  }
  
  
}

