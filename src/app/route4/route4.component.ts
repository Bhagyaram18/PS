import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.scss'],
})
export class Route4Component implements OnInit {
  isStarted: any;
  // timer:any;
  pausedTime: any;
  isTimerCleared: any;

  constructor() {}
  ngOnInit(): void {}
  updateTimer(time: any) {
    // this.timer = time.timeLimit;
    this.isStarted = time.isStarted;
  }
  pausedAt(time: any) {
    this.pausedTime = time;
  }
  clearTimer(time: any) {
    this.isTimerCleared = time;
  }
}
