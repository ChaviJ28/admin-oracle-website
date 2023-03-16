import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewFormComponent } from './modules/forms/components/new-form/new-form.component';
import { MailComponent } from './modules/mail/mail.component';
import { OciComponent } from './modules/oci/oci.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UserComponent,
    NewUserComponent,
    NewFormComponent,
    LogComponent,
    MailComponent,
    OciComponent,
  ],
  imports: [
    AngularEditorModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatChipsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }