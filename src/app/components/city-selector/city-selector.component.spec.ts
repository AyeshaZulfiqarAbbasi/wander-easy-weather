import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitySelectorComponent } from './city-selector.component';
import { FormsModule } from '@angular/forms';

describe('CitySelectorComponent', () => {
  let component: CitySelectorComponent;
  let fixture: ComponentFixture<CitySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitySelectorComponent],
      imports: [FormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(CitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load cities', () => {
    expect(component.cities.length).toBe(50);
  });

  it('should emit city on selection', () => {
    spyOn(component.citySelected, 'emit');
    component.selectedCity = 'London';
    component.onCityChange();
    expect(component.citySelected.emit).toHaveBeenCalledWith('London');
  });
});
