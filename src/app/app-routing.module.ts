import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './modules/core/components/test/test.component';
import { WeatherTestComponent } from './modules/core/components/weather-test/weather-test.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WeatherTestComponent },
  {path: 'test', component: TestComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
