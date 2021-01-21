import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>()
  interval;
  number = 0

  running = false

  constructor() { }

  ngOnInit(): void {
  }

  

  handleStartGame() {
    this.running = true
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.number + 1)
      this.number += 1
    }, 1000)
  }

  handleStopGame() {
    this.running = false
    clearInterval(this.interval)
  }

}
