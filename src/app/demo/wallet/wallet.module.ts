import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../theme/shared/shared.module';

import { WalletRoutingModule } from './wallet-routing.module';
import {TransactionComponent} from './transaction/transaction.component';
import {BalanceComponent} from './balance/balance.component';
import { TransactionFirstComponent } from './transactionFirst/transactionFirst.component';
import { TransactionCreditComponent } from './transactionCredit/transactionCredit.component';


@NgModule({
  declarations: [TransactionComponent, BalanceComponent, TransactionFirstComponent, TransactionCreditComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
