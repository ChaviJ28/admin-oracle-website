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
import { NewUserComponent } from './modules/user/components/new-user/new-user.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips'; 
import { LogComponent } from './modules/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UserComponent,
    NewUserComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatChipsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }