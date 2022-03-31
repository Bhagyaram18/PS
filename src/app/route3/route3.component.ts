import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss'],
})
export class Route3Component implements OnInit {
  isStarted: any;
  timer: any;
  pausedTime: any;
  isTimerCleared: any;

  constructor() {}
  ngOnInit(): void {}
  updateTimer(time: any) {
    this.timer = time.timeLimit;
    this.isStarted = time.isStarted;
  }
  pausedAt(time: any) {
    this.pausedTime = time;
  }
  clearTimer(time: any) {
    this.isTimerCleared = time;
  }
}
