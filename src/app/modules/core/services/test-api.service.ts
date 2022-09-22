import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  constructor(private http: HttpClient) { }

  getWeatherdata(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('/api/WeatherForeCast');
  }

}
