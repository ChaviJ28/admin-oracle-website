import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { WeatherTestComponent } from './components/weather-test/weather-test.component';
import { SharedModule } from '../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TestComponent } from './components/test/test.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    WeatherTestComponent,
    TestComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
  ],
  exports: [
    SpinnerComponent,
    WeatherTestComponent,
    NavbarComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ]
})
export class CoreModule { }
