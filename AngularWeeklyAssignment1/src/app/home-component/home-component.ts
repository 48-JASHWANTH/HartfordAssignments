import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInterface } from '../housing-location';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home-component',
  imports: [HousingLocation, CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocationInterface[] = [];
  housingService: HousingService = inject
  (HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocationInterface[])=>{
      this.housingLocationList = housingLocationList;
      console.log(this.housingLocationList);
    });
  }
}
