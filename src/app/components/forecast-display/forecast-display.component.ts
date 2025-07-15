import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.css']
})
export class ForecastDisplayComponent {
  @Input() city: string = '';
  forecast: any[] = [];
  error: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnChanges(): void {
    if (this.city) {
      this.weatherService.getForecast(this.city).subscribe({
        next: (data) => {
          this.forecast = data.list.filter((item: any, index: number) => index % 8 === 0).slice(0, 5);
          this.error = '';
        },
        error: (err) => {
          this.error = 'Failed to load forecast. Please try again.';
          this.forecast = [];
        }
      });
    }
  }
}