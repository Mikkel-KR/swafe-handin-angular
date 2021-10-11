import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCardService } from '../../credit-card.service';
import { CustomValidators } from './CustomValidators';
import { ICreditCard } from '../../creditCard';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss']
})
export class CreditCardAddComponent implements OnInit {

  creditCardForm = this.formBuilder.group({
    card_number: ['', [ Validators.required, CustomValidators.mustBeInteger(), Validators.minLength(7), Validators.maxLength(16)]],
    cardholder_name: ['', Validators.required],
    csc_code: ['', [Validators.required, CustomValidators.mustBeInteger(), CustomValidators.exactLength(3)]],
    expiration_date: this.formBuilder.group({
      month: ['', CustomValidators.inRange(1, 12)],
      year: ['', CustomValidators.inRange(1, 31)],
    }, {validators: Validators.required, updateOn: 'change'}),
    issuer: ['', Validators.required]
  })
  private creditCardService: CreditCardService

  constructor(private formBuilder: FormBuilder, private service: CreditCardService) {
    this.creditCardService = service;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.creditCardForm.value;
    console.log(formData);

    if(!this.creditCardForm.valid) {
      console.log("Invalid form-input")
      return;
    }

    const newCreditCard: ICreditCard = {
      card_number: parseInt(formData.card_number),
      csc_code: parseInt(formData.csc_code),
      cardholder_name: formData.cardholder_name,
      expiration_date_month: formData.expiration_date.month,
      expiration_date_year: formData.expiration_date.year,
      issuer: formData.issuer
    }

    const response = this.service.addCreditCard(newCreditCard);

    response.subscribe(res => {
      console.log(res);
    });
  }

}
