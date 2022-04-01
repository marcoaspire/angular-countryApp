import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';
import { switchMap,tap } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styles: [
  ]
})
export class CountryDetailsComponent implements OnInit {
  country!:Country;
  translations:string[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countryService.getCountryByCode(id) ),
      tap( resp => console.log(resp))
    )
    .subscribe( country =>{
      //console.log(country);
      this.country=country;
      //this.translations=country.translations!;
    });
    /*
    this.activatedRoute.params.subscribe( ({id}) =>{
       console.log(id);
        this.countryService.getCountryByCode(id)
          .subscribe(country =>{
            console.log(country);
          })
    });
    */
  }

}
