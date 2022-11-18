import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherForecast } from '../../models/weather-forecast.model';
import { TestApiService } from '../../services/test-api.service';

@Component({
  selector: 'app-weather-test',
  templateUrl: './weather-test.component.html',
  styleUrls: ['./weather-test.component.scss']
})
export class WeatherTestComponent implements OnInit,OnDestroy {
  weathers!: WeatherForecast[];
  subWeather!: Subscription;

  constructor(private api: TestApiService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subWeather.unsubscribe();
  }
}
