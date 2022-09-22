import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherTestComponent } from './modules/core/components/weather-test/weather-test.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather-test', pathMatch: 'full' },
  { path: 'weather-test', component: WeatherTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
