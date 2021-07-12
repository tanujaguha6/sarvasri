import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FirstInvoiceComponent} from './first-invoice/first-invoice.component';
import {FirstPackageInvoiceComponent} from './first-package-invoice/first-package-invoice.component';
import {RetailInvoiceComponent} from './retail-invoice/retail-invoice.component';
import {RetailPackageInvoiceComponent} from './retail-package-invoice/retail-package-invoice.component';

@NgModule({
  declarations: [FirstInvoiceComponent,FirstPackageInvoiceComponent,RetailInvoiceComponent,RetailPackageInvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule
  ]
})
export class InvoiceModule { }
