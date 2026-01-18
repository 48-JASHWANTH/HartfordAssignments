import { Component,inject,ChangeDetectorRef } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);
  filteredLocationList: HousingLocationInterface[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocationInterface[])=>{
      this.housingLocationList = housingLocationList;
      // console.log(this.housingLocationList);
      this.filteredLocationList = housingLocationList;
      this.cdr.detectChanges();
    });
  }
  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
