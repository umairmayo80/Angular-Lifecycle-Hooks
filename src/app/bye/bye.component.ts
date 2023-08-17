import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  // define input to create binding
  @Input() user!:string;

  constructor() { 
    console.log("Bye component constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Bye Component ngOnChanges');
  }

  ngOnInit(): void {
    console.log("Bye component ngOnInit")
  }

  ngAfterContentInit(): void {
    console.log('Bye Component AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Bye Component AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Bye Component AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Bye Component AfterViewChecked');
  }

  ngOnDestroy(): void {
      console.log("Bye Component Destroy")
  }

}
