import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPurchaseComponent } from './first-purchase/first-purchase.component';
import { RePurchaseComponent } from './re-purchase/re-purchase.component';

const routes: Routes = [
  {
    path: 'first-purchase', 
    component: FirstPurchaseComponent,
  },
  {
    path: 're-purchase', 
    component: RePurchaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchingReportRoutingModule { }
