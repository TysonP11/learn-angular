import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-text',
  templateUrl: './secret-text.component.html',
  styleUrls: ['./secret-text.component.css']
})
export class SecretTextComponent implements OnInit {

  showText: boolean = false
  count: number[] = []
  
  toggleShowText(event) {
    this.showText = !this.showText
    this.count.push(event.timeStamp)
  }

  isOdd(item) {
    return item % 2 === 0 ? false : true
  }

  constructor() { }

  ngOnInit(): void {
  }
}
