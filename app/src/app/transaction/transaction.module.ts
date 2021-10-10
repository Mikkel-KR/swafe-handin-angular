import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';



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
