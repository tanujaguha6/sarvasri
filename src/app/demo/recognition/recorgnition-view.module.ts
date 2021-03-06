import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecorgnitionViewRoutingModule } from './recorgnition-view-routing.module';
import { NgbButtonsModule, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../theme/shared/shared.module';
import { RecorgnitionViewComponent } from './recorgnition-view.component';

@NgModule({
  declarations: [RecorgnitionViewComponent],
  imports: [
    CommonModule,
    RecorgnitionViewRoutingModule,
    SharedModule,
    NgbButtonsModule,
    NgbDatepickerModule,
    NgbPaginationModule
  ]
})
export class RecorgnitionViewModule { }
