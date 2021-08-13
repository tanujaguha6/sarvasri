import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreditComponent } from './credit/credit.component';

const routes: Routes = [
  {
    path: '',
    children: [
  {
    path: 'balance/:type', 
    component: BalanceComponent,
  },
  {
    path: 'transaction/:type', 
    component: TransactionComponent,
  },
  {
    path: 'credit', 
    component: CreditComponent,
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
