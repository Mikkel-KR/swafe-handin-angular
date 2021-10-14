import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"



@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TransactionModule { }
