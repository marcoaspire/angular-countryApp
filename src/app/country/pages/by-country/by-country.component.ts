import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li{
      cursor:pointer
    }
    `
  ]
})


export class ByCountryComponent {
  arg:string ="";
  error:boolean=false;
  countries: Country[]=[];
  countrySuggested:  Country[]=[];
  showSuggestion=false;

  constructor(private countryService:CountryService) { }
  
  
  search( arg:string){
    this.arg=arg;
    this.error=false;
    this.showSuggestion=false;
    this.countryService.searchByCountry(this.arg)
      .subscribe( (resp:Country[]) =>{
      this.countries=resp;
    }, (err:any) =>{
      this.error=true;
      this.countries= [];
      console.info(err);
      
    }
    
    );
  }

  suggestions(arg:string){
    this.showSuggestion=true;

    this.error=false;
    this.arg=arg;
    this.countryService.searchByCountry(arg)
      .subscribe( 
         (countries:Country[]) =>{
          this.countrySuggested=countries.splice(0,3)
        }
      );
  }

  searchArg(arg:string){
    this.search(arg);
  }


}
