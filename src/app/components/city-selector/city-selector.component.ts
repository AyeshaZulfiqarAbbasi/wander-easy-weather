import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import cities from '../../../assets/cities.json';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent implements OnInit {
  cities: string[] = [];
  selectedCity: string = '';
  @Output() citySelected = new EventEmitter<string>();

  ngOnInit(): void {
    this.cities = cities;
  }

  onCityChange(): void {
    this.citySelected.emit(this.selectedCity); // Changed from emitCaseSensitive to emit
  }
}