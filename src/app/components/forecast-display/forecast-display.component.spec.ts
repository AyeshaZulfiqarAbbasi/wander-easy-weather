import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastDisplayComponent } from './forecast-display.component';
import { WeatherService } from '../../services/weather.service';
import { of, throwError } from 'rxjs';

describe('ForecastDisplayComponent', () => {
  let component: ForecastDisplayComponent;
  let fixture: ComponentFixture<ForecastDisplayComponent>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    weatherService = jasmine.createSpyObj('WeatherService', ['getForecast']);
    await TestBed.configureTestingModule({
      declarations: [ForecastDisplayComponent],
      providers: [{ provide: WeatherService, useValue: weatherService }]
    }).compileComponents();
    fixture = TestBed.createComponent(ForecastDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display forecast for a city', () => {
    const mockData = { list: [{ dt_txt: '2025-07-14', main: { temp: 25 }, weather: [{ description: 'clear', icon: '01d' }] }] };
    weatherService.getForecast.and.returnValue(of(mockData));
    component.city = 'London';
    component.ngOnChanges();
    expect(component.forecast.length).toBe(1);
    expect(component.error).toBe('');
  });

  it('should display error on API failure', () => {
    weatherService.getForecast.and.returnValue(throwError(() => new Error('API error')));
    component.city = 'InvalidCity';
    component.ngOnChanges();
    expect(component.error).toBe('Failed to load forecast. Please try again.');
    expect(component.forecast).toEqual([]);
  });
});