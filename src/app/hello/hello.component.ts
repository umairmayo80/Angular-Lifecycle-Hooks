import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {


  name:string = "Anusha";

  constructor() { 
    console.log("Hello component constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hello Component ngOnChanges');
  }

  ngOnInit(): void {
    console.log("Hello component ngOnInit")
  }

  ngAfterContentInit(): void {
    console.log('Hello Component AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Hello Component AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Hello Component AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Hello Component AfterViewChecked');
  }

  ngOnDestroy(): void {
      console.log("Hello Component Destroy")
  }
}
