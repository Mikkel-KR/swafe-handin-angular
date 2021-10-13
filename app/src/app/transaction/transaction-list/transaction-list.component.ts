import { Component, Input, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input() transactions!: ITransaction[];

  constructor() { }

  ngOnInit(): void {
  }

}
