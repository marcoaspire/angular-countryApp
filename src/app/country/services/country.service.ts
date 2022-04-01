import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private endPoint:string = 'https://restcountries.com/v3.1/';

  get httpParams(){
    return new HttpParams().set(
      'fields','name,capital,population,cca2'
    );
  }

  constructor(private http: HttpClient) { }

  searchByCountry(countryName: string){
    const url  = `${this.endPoint}/name/${countryName}`;
    return this.http.get<Country[]>(url);
    //   .pipe(
    //      catchError(err =>of([]) 
    // );
  }

  searchByCapital(capitalName: string){
    const url  = `${this.endPoint}/capital/${capitalName}`;
    return this.http.get<Country[]>(url);
  }

  searchByRegion(region: string){
    
    const url  = `${this.endPoint}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.httpParams})
    .pipe(
      tap(console.log)
    )
    ;
  }

  getCountryByCode(id: string){
    const url  = `https://restcountries.com/v2/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
