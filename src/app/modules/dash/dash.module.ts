import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashComponent } from './dash.component';


@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    SharedModule
  ]
})
export class DashModule { }
