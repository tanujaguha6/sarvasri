import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeductionComponent } from './deduction.component';
import { FirstIncomeDeductionComponent } from './first-income-deduction/first-income-deduction.component';

const routes: Routes = [
  {
    path: '',
    component: DeductionComponent,
    children: [
      {
        path: 'first-income-deduction', 
        component: FirstIncomeDeductionComponent,
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeductionRoutingModule { }
