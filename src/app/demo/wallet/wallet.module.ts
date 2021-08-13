import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../theme/shared/shared.module';

import { WalletRoutingModule } from './wallet-routing.module';
import {TransactionComponent} from './transaction/transaction.component';
import {BalanceComponent} from './balance/balance.component';
import {CreditComponent} from './credit/credit.component';


@NgModule({
  declarations: [TransactionComponent, BalanceComponent, CreditComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
