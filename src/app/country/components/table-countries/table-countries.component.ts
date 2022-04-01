import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styles: [
  ]
})
export class TableCountriesComponent{

  @Input('data') countries : Country[] = [ ];
  constructor() { }

  

}
