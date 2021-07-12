import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPurchaseComponent } from './first-purchase/first-purchase.component';
import { RePurchaseComponent } from './re-purchase/re-purchase.component';

import { MatchingReportRoutingModule } from './matching-report-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FirstPurchaseComponent, RePurchaseComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule,
    MatchingReportRoutingModule
  ]
})
export class MatchingReportModule { }
