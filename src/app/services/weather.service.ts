import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getForecast(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`);
  }
}