import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './transaction/transaction-list-item/transaction-list-item.component';
import { TransactionAddComponent } from './transaction/transaction-add/transaction-add.component';



@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
