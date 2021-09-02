import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionCreditComponent } from './transactionCredit/transactionCredit.component';
import { TransactionFirstComponent } from './transactionFirst/transactionFirst.component';

const routes: Routes = [
  {
    path: '',
    children: [
  {
    path: 'balance/:type', 
    component: BalanceComponent,
  },
  {
    path: 'transaction/retail', 
    component: TransactionComponent,
  },
  {
    path: 'transaction/first', 
    component: TransactionFirstComponent,
  },
  {
    path: 'transaction/credit', 
    component: TransactionCreditComponent,
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
