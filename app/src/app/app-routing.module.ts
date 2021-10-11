import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreditCardAddComponent } from './credit-card/credit-card-add/credit-card-add.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "credit-cards", loadChildren: () => import("./credit-card/credit-card.module").then(m => m.CreditCardModule) },
  { path: "add-credit-card", component: CreditCardAddComponent },
  { path: "transactions", loadChildren: () => import("./transaction/transaction.module").then(m => m.TransactionModule) },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
