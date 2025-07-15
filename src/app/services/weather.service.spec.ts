import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch forecast data for a city', () => {
    const mockResponse = { list: [{ dt_txt: '2025-07-14', main: { temp: 25 }, weather: [{ description: 'clear', icon: '01d' }] }] };
    service.getForecast('London').subscribe(data => {
      expect(data.list.length).toBe(1);
      expect(data.list[0].main.temp).toBe(25);
    });
    const req = httpMock.expectOne(request => request.url.includes('London'));
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});