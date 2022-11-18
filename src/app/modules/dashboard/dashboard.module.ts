import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewExampleComponent } from './components/new-example/new-example.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    NewExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
