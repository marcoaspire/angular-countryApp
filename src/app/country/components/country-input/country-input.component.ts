import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {
  
  //create an event
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string ="Eg. Peru";
  
  debouncer: Subject<string> =new Subject();

  arg:string ='';

  ngOnInit(): void {
    this.debouncer
    .pipe(
      //wait 1s
      debounceTime(1000)
    )
    
    .subscribe((value:string) =>{
      //text typed
      
      this.onDebounce.emit(value);
      
    })
  }

  keypress(){
    this.debouncer.next(this.arg);
  }

  search(){
    this.onEnter.emit(this.arg);
    
  }

}
