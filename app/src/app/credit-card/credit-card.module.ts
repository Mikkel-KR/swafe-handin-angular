import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './credit-card-list-item/credit-card-list-item.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { readableMonthPipe } from '../readable-month.pipe';

@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
    CreditCardDetailsComponent,
    readableMonthPipe
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    CreditCardListComponent,
    CreditCardAddComponent
  ],
})
export class CreditCardModule { }
