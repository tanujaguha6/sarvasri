import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblBasicRoutingModule } from './tbl-basic-routing.module';
import { TblBasicComponent } from './tbl-basic.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [TblBasicComponent],
  imports: [
    CommonModule,
    TblBasicRoutingModule,
    SharedModule,
    NgbButtonsModule,
    NgbPaginationModule
  ]
})
export class TblBasicModule { }
