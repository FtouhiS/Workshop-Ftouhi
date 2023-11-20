import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router, not Route
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-product-rfcomponent',
  templateUrl: './add-product-rfcomponent.component.html',
  styleUrls: ['./add-product-rfcomponent.component.css']
})
export class AddProductRFComponentComponent implements OnInit {
  ajoutEffectue: boolean = false;
  hidden = true;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      IdProduit: ['', [Validators.required, Validators.minLength(3)]],
      Code: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]],
      Libelle: ['', Validators.required],
      PrixUnitaire: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      IdDetailsProduit: ['', Validators.required],
      DateCreation: ['', Validators.required],
      DateDerniereModification: ['', Validators.required],
      CategorieProduit: ['', Validators.required],
    });

    this.myForm.valueChanges.subscribe(() => this.handleFieldChanges());
  }

  handleFieldChanges() {
    const areRequiredFieldsValid =
      this.myForm.get('IdProduit')?.valid &&
      this.myForm.get('Code')?.valid &&
      this.myForm.get('Libelle')?.valid &&
      this.myForm.get('PrixUnitaire')?.valid;

    this.hidden = !areRequiredFieldsValid;
  }

  get Code() {
    return this.myForm.get('Code');
  }

  get IdProduit() {
    return this.myForm.get('IdProduit');
  }

  get Libelle() {
    return this.myForm.get('Libelle');
  }

  get DateCreation() {
    return this.myForm.get('DateCreation');
  }

  get DateDerniereModification() {
    return this.myForm.get('DateDerniereModification');
  }

  get PrixUnitaire() {
    return this.myForm.get('PrixUnitaire');
  }

  get IdDetailsProduit() {
    return this.myForm.get('IdDetailsProduit');
  }

  get CategorieProduit() {
    return this.myForm.get('CategorieProduit');
  }

  add() {
    this.ajoutEffectue = true;
    console.log('Produit ajouté !');
  }
}