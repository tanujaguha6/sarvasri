import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../theme/shared/shared.module';

import { WalletRoutingModule } from './wallet-routing.module';
import {TransactionComponent} from './transaction/transaction.component';


@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
