import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeductionRoutingModule } from './deduction-routing.module';
import { DeductionComponent } from './deduction.component';
import { FirstIncomeDeductionComponent } from './first-income-deduction/first-income-deduction.component';


@NgModule({
  declarations: [DeductionComponent, FirstIncomeDeductionComponent],
  imports: [
    CommonModule,
    DeductionRoutingModule
  ]
})
export class DeductionModule { }
