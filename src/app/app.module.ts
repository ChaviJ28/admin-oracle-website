import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FormsComponent } from './modules/forms/forms.component';
import { UserComponent } from './modules/user/user.component';
import { MatSelectModule } from '@angular/material/select';
import { LogComponent } from './modules/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UserComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }