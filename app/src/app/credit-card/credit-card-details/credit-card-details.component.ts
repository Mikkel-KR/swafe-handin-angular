import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ICreditCard } from 'src/app/creditCard';
import { ITransaction } from 'src/app/transaction';
import { TransactionService } from 'src/app/transaction.service';
import { CreditCardService } from '../../credit-card.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {

  creditCardNumber!: number;
  creditCard$!: Observable<ICreditCard | undefined>;
  transactions$!: Observable<ReadonlyArray<ITransaction>>;

  constructor(
    private creditCardService: CreditCardService,
    private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.creditCardNumber = parseInt(params.creditCardNumber);

      this.creditCard$ = this.creditCardService.getCreditCards().pipe(
        map(cc => cc.find(c => c.card_number === this.creditCardNumber))
      );

      this.transactions$ = this.transactionService.getTransactions().pipe(
        map(transactions =>
          transactions.filter(transaction => transaction.credit_card.card_number === this.creditCardNumber)
            .sort((a, b) => a.date - b.date)
        )
      );

    });
  }

  ngOnInit(): void {
  }

  deleteCreditCard() {
    const response = this.creditCardService.deleteCreditCard(this.creditCardNumber);
    response.subscribe(r => this.router.navigate([""]));
  }

}
