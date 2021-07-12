import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { DeductionRoutingModule } from './deduction-routing.module';
import { DeductionComponent } from './deduction.component';
import { FirstIncomeDeductionComponent } from './first-income-deduction/first-income-deduction.component';


@NgModule({
  declarations: [DeductionComponent, FirstIncomeDeductionComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbButtonsModule,
    NgbPaginationModule,
    DeductionRoutingModule
  ]
})
export class DeductionModule { }
