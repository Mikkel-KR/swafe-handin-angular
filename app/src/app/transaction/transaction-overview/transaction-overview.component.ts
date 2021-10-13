import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from 'src/app/transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss']
})
export class TransactionOverviewComponent implements OnInit {

  transactions$!: Observable<Array<ITransaction>>;
  filteredTransactions$!: Observable<Array<ITransaction>>;

  constructor(private transactionService: TransactionService) {
    this.transactions$ = this.transactionService.getTransactions();
    this.filteredTransactions$ = this.transactions$;
  }

  ngOnInit(): void {
  }

}
