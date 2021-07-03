import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { DirectDownlineComponent } from './direct-downline/direct-downline.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';

const routes: Routes = [
  {
    path: 'member-add', 
    component: MemberAddComponent,
  },
  {
    path: 'member-view', 
    component: MemberViewComponent,
  },
  {
    path: 'direct-downline', 
    component: DirectDownlineComponent,
  },
  {
    path: 'binary-tree', 
    component: BinaryTreeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
