import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  creditCard$!: Observable<ICreditCard | undefined>;
  transactions$!: Observable<ReadonlyArray<ITransaction>>;

  constructor(private creditCardService: CreditCardService, private transactionService: TransactionService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      const cardNumber = parseInt(params.creditCardNumber);

      this.creditCard$ = this.creditCardService.getCreditCards().pipe(
        map(cc => cc.find(c => c.card_number === cardNumber))
      );

      this.transactions$ = this.transactionService.getTransactions().pipe(
        map(transaction =>
          transaction.filter(t => t.credit_card.card_number === cardNumber)
            .sort((a, b) => a.date - b.date)
        )
      );

    });
  }

  ngOnInit(): void {
  }

}
