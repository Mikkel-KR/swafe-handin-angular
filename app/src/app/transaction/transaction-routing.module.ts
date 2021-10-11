import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';

const routes: Routes = [
  { path: "", component: TransactionOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }