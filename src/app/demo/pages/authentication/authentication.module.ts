import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: []
})
export class AuthenticationModule { }
