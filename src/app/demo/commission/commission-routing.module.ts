import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommissionComponent } from './commission.component';
import { ConsistencyIncomeComponent } from './consistency-income/consistency-income.component';
import { FirstPurchaseIncomeComponent } from './first-purchase-income/first-purchase-income.component';
import { PayoutReportComponent } from './payout-report/payout-report.component';
import { RePurchaseMonthlyIncomeComponent } from './re-purchase-monthly-income/re-purchase-monthly-income.component';
import { RePurchaseWeeklyIncomeComponent } from './re-purchase-weekly-income/re-purchase-weekly-income.component';

const routes: Routes = [
  {
    path: '',
    component: CommissionComponent,
    children: [
      {
        path: 'first-purchase-income', 
        component: FirstPurchaseIncomeComponent,
      },
      {
        path: 're-purchase-weekly-income', 
        component: RePurchaseWeeklyIncomeComponent,
      },
      {
        path: 're-purchase-monthly-income', 
        component: RePurchaseMonthlyIncomeComponent,
      },
      {
        path: 'consistency-income', 
        component: ConsistencyIncomeComponent,
      },
      {
        path: 'payout-report', 
        component: PayoutReportComponent,
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommissionRoutingModule { }
