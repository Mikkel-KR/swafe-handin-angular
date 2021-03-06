import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreditCardService } from 'src/app/credit-card.service';
import { ICreditCard } from 'src/app/creditCard';
import { ITransaction } from 'src/app/transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss']
})
export class TransactionOverviewComponent implements OnInit {

  creditCards$!: Observable<ReadonlyArray<ICreditCard>>;
  transactions$!: Observable<Array<ITransaction>>;
  filteredTransactions$!: Observable<Array<ITransaction>>;
  filterCardNumber?: number;

  constructor(private transactionService: TransactionService, private creditCardService: CreditCardService) {
    this.transactions$ = this.transactionService.getTransactions();
    this.creditCards$ = this.creditCardService.getCreditCards().pipe();
    this.filteredTransactions$ = this.transactions$;
    this.filterCardNumber = undefined;
  }

  ngOnInit(): void {
  }

  filterSelectionChanged(selection: MatSelectChange): void {
    this.filterCardNumber = selection.value;
    if (this.filterCardNumber) {
      this.filteredTransactions$ = this.transactions$.pipe(
        map(transactions => transactions.filter(transaction => transaction.credit_card.card_number === this.filterCardNumber))
      );
    } else {
      this.filteredTransactions$ = this.transactions$;
    }
  }

}
