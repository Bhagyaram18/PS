import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss'],
})
export class CompTwoComponent implements OnInit, OnChanges {
  @Output() updateTimer = new EventEmitter();
  @Output() clearTimer = new EventEmitter();

  @Input() pausedTime: any;
  pausedTimeArray: Array<any> = [];

  timerStart: any;
  start: boolean = false;
  hidePausedTime: boolean = true;

  constructor() {
    this.timerStart = null;
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['pausedTime']?.currentValue) {
      this.pausedTimeArray.push(
        `Paused at ${changes?.['pausedTime'].currentValue}`
      );
    }
  }

  startPauseTimer() {
    this.start = !this.start;
    let time = { timeLimit: this.timerStart, isStarted: this.start };
    this.updateTimer.emit(time);
    this.clearTimer.emit(false);
  }
  resetTimer() {
    this.pausedTimeArray = [];
    this.timerStart = null;
    this.start = false;
    let time = { timeLimit: this.timerStart, isStarted: this.start };
    this.updateTimer.emit(time);
    this.clearTimer.emit(true);
  }
}
