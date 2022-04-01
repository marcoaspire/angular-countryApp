import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent{
  arg:string ="";
  error:boolean=false;
  countries: Country[]=[];
  constructor(private countryService:CountryService) { }
  search( arg:string){
    this.arg=arg;
    this.error=false;
    console.log(this.arg); 
    this.countryService.searchByCapital(this.arg)
      .subscribe( (resp:Country[]) =>{
      this.countries=resp;
      console.log(resp[0]);
    }, (err:any) =>{
      console.log("Error");
      this.error=true;
      this.countries= [];
      console.info(err);
      
    }
    
    );
  }

  suggestions(event:string){
    this.error=false;
    //TODO:Create
  }

}
