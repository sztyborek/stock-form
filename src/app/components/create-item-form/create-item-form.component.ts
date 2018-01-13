import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { 
  StockItem, 
  StockItemDetails,
  StockItemVariant,
  Category
} from '../../models/stock-item.model';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent {
  // by default we assume the product is in stock
  inStock = true;
  form: FormGroup;
  newVariant: FormGroup;
  variantsFormGroup: FormGroup[] = [];
  categories: Category[] = [
    { id: '1', label: 'Bluzy' },
    { id: '2', label: 'Sukienki' },
    { id: '3', label: 'Spodnie' }
  ];
 details: StockItemDetails = {
    width: '10',
    height: '10',
    in_stock: true,
    category_id: '2'
  };
  availableVariants: StockItemVariant[] = [
    { sku: 'sukienka-1', price: 10000, quantity: 10 },
    { sku: 'sukienka-2', price: 20000, quantity: 10 },
    { sku: 'sukienka-3', price: 30000, quantity: 10 },
  ];
  newItem: StockItem = {
    title: 'Czerwona sukienka',
    description: 'Czerwona sukienka, jaka jest każdy widzi',
    productDetails: this.details,
    variants: this.availableVariants
  };
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private itemService: ItemService
    ) {
    this.form = formBuilder.group({
      'title': [this.newItem.title, Validators.required],
      'description': [
        this.newItem.description, 
        Validators.required
        ],
      'width': [this.newItem.productDetails.width],
      'height': [this.newItem.productDetails.height],
      'in_stock': [this.newItem.productDetails.in_stock],
      'category_id': [this.newItem.productDetails.category_id],
      'variants': this.formBuilder.array(
        this.initVariants()
      )
    });
    this.newVariant = formBuilder.group({
      'newSku': [''],
      'newPrice': [0],
      'newQuantity': [0]
    });
  }

  initVariants() {
    this.availableVariants.forEach((variant) => {
      this.variantsFormGroup.push(
        this.formBuilder.group({
          'sku': [variant.sku],
          'price': [variant.price / 100],
          'quantity': [variant.quantity]
        })
      );
    });
    return this.variantsFormGroup;
  }

  addVariant() {
    const controls = <FormArray>this.form.controls['variants'];
    controls.push(
      this.formBuilder.group({
        'sku': [this.newVariant.get('newSku').value],
        'price': [this.newVariant.get('newPrice').value],
        'quantity': [this.newVariant.get('newQuantity').value]
      })
    );
    this.newVariant.controls['newSku'].setValue('');
    this.newVariant.controls['newPrice'].setValue(0);
    this.newVariant.controls['newQuantity'].setValue(0);

    return controls;
  }

  removeVariant(i: number) {
    const controls = <FormArray>this.form.controls['variants'];
    controls.removeAt(i);
  }

  submitForm(formValue) {
    console.log(formValue)
    this.itemService.setItem(formValue);
    this.router.navigate(['/success']);
  }
}