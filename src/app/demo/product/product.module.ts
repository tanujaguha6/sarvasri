import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductRoutingModule } from './product-routing.module';
import  {ProductViewComponent} from './product-view/product-view.component';

@NgModule({
  declarations: [ProductViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbButtonsModule,
    NgbPaginationModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
