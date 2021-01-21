import { element } from 'protractor';
import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {

  @ViewChild('heading', {static: true}) header: ElementRef


  @Input() element: {type: string, name: string, content: string}
  @Input() name: string
  constructor() { 
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('onInit called')
    console.log('Text Content' + this.header.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log("do check called")
  } 

  ngAfterContentInit(){
    console.log('after content init called')
  }

  ngAfterViewInit() {
    console.log('Text Content: ' + this.header.nativeElement.textContent)
  }

}
