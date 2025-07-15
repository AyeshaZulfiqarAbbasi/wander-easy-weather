import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { ForecastDisplayComponent } from './components/forecast-display/forecast-display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './services/weather.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitySelectorComponent,
        ForecastDisplayComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [WeatherService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('WanderEasy Weather');
  });

  it(`should have the 'WanderEasy Weather' title`, () => {
    expect(component.title).toEqual('WanderEasy Weather');
  });

  it('should handle city selection', () => {
    component.onCitySelected('London');
    expect(component.selectedCity).toBe('London');
  });
});