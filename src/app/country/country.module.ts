import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

//owns
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    CountryDetailsComponent,
    TableCountriesComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    CountryDetailsComponent
  ]
})
export class CountryModule { }
