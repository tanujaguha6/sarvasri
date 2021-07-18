import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../../theme/shared/shared.module';

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthSigninRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AuthSigninComponent]
})
export class AuthSigninModule { }
