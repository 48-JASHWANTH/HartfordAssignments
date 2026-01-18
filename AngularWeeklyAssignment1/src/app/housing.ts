import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocationInterface[]> {
    const data = await fetch(this.url);
    console.log(data);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocationInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`);   
    return await data.json() ?? {}; 
  }
  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Application submitted for ${firstName} ${lastName} (${email})`);
  }
}
