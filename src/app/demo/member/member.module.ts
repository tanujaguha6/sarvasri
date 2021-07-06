import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import {BinaryTreeComponent} from './binary-tree/binary-tree.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [BinaryTreeComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule
  ]
})
export class MemberModule { }
