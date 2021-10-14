import { Component, Input, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input() transactions!: ITransaction[];
  @Input() extendedInformation!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.transactions = this.transactions.sort((a, b) => b.date - a.date);
  }

}
