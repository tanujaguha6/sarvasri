import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import {BinaryTreeComponent} from './binary-tree/binary-tree.component';
import {MemberViewComponent} from './member-view/member-view.component';
import {DirectDownlineComponent} from './direct-downline/direct-downline.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [BinaryTreeComponent,MemberViewComponent,DirectDownlineComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule
  ]
})
export class MemberModule { }
