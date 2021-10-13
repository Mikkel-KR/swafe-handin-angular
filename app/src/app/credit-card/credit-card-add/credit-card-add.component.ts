import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
      month: ['', [Validators.required, CustomValidators.inRange(1, 12)]],
      year: ['', [Validators.required, CustomValidators.inRange(1, 31)]],
    }, {validators: Validators.required, updateOn: 'change'}),
    issuer: ['', Validators.required]
  });

  showValidationInfo: boolean = false;
  cardCreated: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: CreditCardService) {
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
      expiration_date_year: this.transformYear(formData.expiration_date.year),
      issuer: formData.issuer
    }

    const response = this.service.addCreditCard(newCreditCard);

    response.subscribe(res => {
      console.log(res);

      if(res.message="Created credit card") {
        this.cardCreated = true;
        this.resetForm(this.creditCardForm);
      }
    });
  }

  transformYear(yearValue: number) {
    const yearStr = yearValue.toString();

    if(yearStr.length === 4) {
      return yearValue;
    }

    if(yearStr.length === 1) {
      return parseInt("200" + yearValue);
    } else if(yearStr.length === 2) {
      return parseInt("20" + yearValue);
    } else if(yearStr.length === 3){
      return parseInt("2" + yearValue);
    } else {
      return yearValue;
    }
  }

  toggleValidationInfo() {
    this.showValidationInfo = !this.showValidationInfo;
  }

  resetForm(form: FormGroup) {

    form.reset();
    for (let control in form.controls) {
      form.controls[control].setErrors(null);
    }

    form.get('expiration_date.month')?.setErrors(null);
    form.get('expiration_date.year')?.setErrors(null);
  }

  // Validation error functions

  hasRequiredError(formControlName: string) {
    return this.hasErrors(formControlName, ['required'])
  }

  hasErrors(formControlName: string, errorNames: Array<string>) {
      return errorNames.some(errorName => {
        return this.creditCardForm.hasError(errorName, formControlName);
      })
  }

}
