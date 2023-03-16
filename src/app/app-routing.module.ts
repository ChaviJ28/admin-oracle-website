import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './modules/core/components/test/test.component';
import { WeatherTestComponent } from './modules/core/components/weather-test/weather-test.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { FormsComponent } from './modules/forms/forms.component';
import { UserComponent } from './modules/user/user.component';
import { LogComponent } from './modules/log/log.component';
import { MailComponent } from './modules/mail/mail.component';
import { OciComponent } from './modules/oci/oci.component';
import { NewFormComponent } from './modules/forms/components/new-form/new-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WeatherTestComponent },
  { path: 'test', component: TestComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormsComponent },
  { path: 'user', component: UserComponent },
  { path: 'log', component: LogComponent },
  { path: 'new-form', component: NewFormComponent },
  { path: 'mail', component: MailComponent },
  { path: 'oci', component: OciComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
