import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailInvoiceComponent } from './retail-invoice/retail-invoice.component';
import { RetailPackageInvoiceComponent } from './retail-package-invoice/retail-package-invoice.component';
import { FirstInvoiceComponent } from './first-invoice/first-invoice.component';
import { FirstPackageInvoiceComponent } from './first-package-invoice/first-package-invoice.component';

const routes: Routes = [
  {
    path: 'retail', 
    component: RetailInvoiceComponent,
  },
  {
    path: 'retail-package', 
    component: RetailPackageInvoiceComponent,
  },
  {
    path: 'first', 
    component: FirstInvoiceComponent,
  },
  {
    path: 'first-package', 
    component: FirstPackageInvoiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
