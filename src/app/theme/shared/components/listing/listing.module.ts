import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbButtonsModule,
    NgbPaginationModule
  ],
  declarations: [ListingComponent]
})
export class ListingModule { }
