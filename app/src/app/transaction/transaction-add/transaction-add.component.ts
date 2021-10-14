import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/transaction.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/CustomValidators';
import { ITransaction } from 'src/app/transaction';
import { IPostResponse } from 'src/postResponse';
import { CreditCardService } from 'src/app/credit-card.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICreditCard } from 'src/app/creditCard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss']
})
export class TransactionAddComponent implements OnInit {

  createTransactionForm = this.formBuilder.group({
    credit_card_number: ['', Validators.required],
    amount: ['', [ Validators.required, CustomValidators.mustBeInteger()]],
    currency: ['', Validators.required],
    comment: ['']
  });

  currenciesAvailable: ReadonlyArray<string> = [
    'CAD',
    'EUR',
    'KYD',
    'MWK',
    'NAD',
    'USD',
  ]

  creditCards$: Observable<ReadonlyArray<ICreditCard>>;
  transactionCreated: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private transactionService: TransactionService, private creditCardService: CreditCardService) { 
    this.creditCards$ = this.creditCardService.getCreditCards();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.createTransactionForm.value;
    console.log(formData);

    if(!this.createTransactionForm.valid) {
      console.log("Invalid form-input")
      return;
    }

    //find credit from card_number:
    this.creditCardService.getCreditCards().pipe(
      map(cc => cc.find(c => c.card_number === formData.credit_card_number))
    ).subscribe(creditCard => {

      if(!creditCard) {
        console.log(`No creditcard found with number: ${formData.credit_card_number}`)
        return;
      }

      const newTransaction: ITransaction = {
        credit_card: creditCard,
        amount: formData.amount,
        comment: formData.comment,
        currency: formData.currency,
        date: Date.now()
      }
  
      this.handleSendCreateRequest(newTransaction);
    });
  }

  handleSendCreateRequest(newTransaction: ITransaction) {
    const response = this.transactionService.addTransaction(newTransaction);
  
    response.subscribe(res => {
      var postResponse: IPostResponse = res;

      console.log(res);

      if(postResponse.message) {
        this.transactionCreated = true;
        this.resetForm(this.createTransactionForm);
        this.router.navigateByUrl("/transactions")
      }
    });
  }

  resetForm(form: FormGroup) {

    form.reset();
    for (let control in form.controls) {
      form.controls[control].setErrors(null);
    }
  }

  // Validation error functions

  hasRequiredError(formControlName: string) {
    return this.hasErrors(formControlName, ['required'])
  }

  hasErrors(formControlName: string, errorNames: Array<string>) {
      return errorNames.some(errorName => {
        return this.createTransactionForm.hasError(errorName, formControlName);
      })
  }

}
