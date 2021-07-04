import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommissionRoutingModule } from './commission-routing.module';
import { CommissionComponent } from './commission.component';
import { FirstPurchaseIncomeComponent } from './first-purchase-income/first-purchase-income.component';
import { RePurchaseWeeklyIncomeComponent } from './re-purchase-weekly-income/re-purchase-weekly-income.component';
import { RePurchaseMonthlyIncomeComponent } from './re-purchase-monthly-income/re-purchase-monthly-income.component';
import { ConsistencyIncomeComponent } from './consistency-income/consistency-income.component';
import { PayoutReportComponent } from './payout-report/payout-report.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CommissionComponent, FirstPurchaseIncomeComponent, RePurchaseWeeklyIncomeComponent, RePurchaseMonthlyIncomeComponent, ConsistencyIncomeComponent, PayoutReportComponent],
  imports: [
    CommonModule,
    CommissionRoutingModule,
    SharedModule,
    NgbButtonsModule,
    NgbPaginationModule
  ]
})
export class CommissionModule { }
