import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'Europe', 'Asia', 'Oceania', 'Americas'];
  public selectedRegion?: Region;

  constructor( private CountriesService: CountriesService ) {}


  ngOnInit(): void {
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
  }

  searchRegion ( region: Region ) : void {

    this.selectedRegion = region;

    this.CountriesService.searchRegion( region )
    .subscribe( countries => this.countries = countries)
  }


}
