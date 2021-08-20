import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import {BinaryTreeComponent} from './binary-tree/binary-tree.component';
import {MemberViewComponent} from './member-view/member-view.component';
import {MemberAddComponent} from './member-add/member-add.component';
import {DirectDownlineComponent} from './direct-downline/direct-downline.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule,NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BinaryTreeComponent,MemberViewComponent,DirectDownlineComponent,MemberAddComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule,
    NgbTabsetModule,
  ]
})
export class MemberModule { }
