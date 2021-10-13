import { Component, Input, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/transaction';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {
  
  @Input() transaction!: ITransaction;

  constructor() { }

  ngOnInit(): void {
  }

}
