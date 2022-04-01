import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-by-region',
  templateUrl: './by-region.component.html',
    styles: [ `
      button {
        margin-right: 5px;
      }
    
    `
    ]
  })


export class ByRegionComponent {
  regions: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = '';

  countries: Country[]=[];
  constructor(private countryService:CountryService) { }
  
  getCSSClass( region: string ): string {
    return (region === this.activeRegion) 
            ? 'btn btn-primary'
            : 'btn btn-outline-primary';
    }

  activate( region: string ) {

    if ( region === this.activeRegion ) { return; }

    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchByRegion( region )
      .subscribe( (countries:Country[]) => this.countries = countries );
  }

}
