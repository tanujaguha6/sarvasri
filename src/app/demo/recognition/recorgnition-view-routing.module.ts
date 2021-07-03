import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecorgnitionViewComponent } from './recorgnition-view.component';


const routes: Routes = [{
  path: 'recognition-view', 
  component: RecorgnitionViewComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecorgnitionViewRoutingModule { }
