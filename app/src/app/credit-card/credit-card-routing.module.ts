import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';

const routes: Routes = [
  { path: "", component: CreditCardListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }