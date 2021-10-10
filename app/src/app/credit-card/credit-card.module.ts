import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './credit-card-list-item/credit-card-list-item.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    HttpClientModule,
  ]
})
export class CreditCardModule { }