import { Component, Input, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {

  @Input() transaction!: ITransaction;
  @Input() extendedInformation!: boolean;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  deleteTransaction() {
    if (this.transaction.uid) {
      const response = this.transactionService.deleteTransaction(this.transaction.uid);
      response.subscribe(r => window.location.reload());
    }
  }
}
