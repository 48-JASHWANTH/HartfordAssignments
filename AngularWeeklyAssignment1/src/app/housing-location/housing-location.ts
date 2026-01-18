import { Component,Input } from '@angular/core';
import { HousingLocationInterface } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  @Input() housingLocation!: HousingLocationInterface;
}
