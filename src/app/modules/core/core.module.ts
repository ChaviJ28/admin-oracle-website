import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { WeatherTestComponent } from './components/weather-test/weather-test.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SpinnerComponent,
    WeatherTestComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SpinnerComponent,
    WeatherTestComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ]
})
export class CoreModule { }
