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
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss'],
})
export class CompOneComponent implements OnInit, OnChanges {
  @Input() timer: any;
  @Input() isStarted: any;
  @Input() isTimerCleared: any;
  @Output() pausedTime = new EventEmitter();
  timerInterval: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.isStarted) {
      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    } else {
      clearInterval(this.timerInterval);
      this.pausedTime.emit(this.timer);
    }
    if (this.isTimerCleared) {
      this.timer = null;
    }
  }
}
