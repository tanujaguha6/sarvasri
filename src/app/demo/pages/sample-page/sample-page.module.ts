import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';

import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    NgbTabsetModule,
  ]
})
export class SamplePageModule { }
