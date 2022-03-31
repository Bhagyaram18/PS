import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RouteFourServiceService } from '../route-four-service.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss'],
})
export class CompTwoComponent implements OnInit {
  pausedTimeArray: Array<any> = [];

  timerStart: any;
  start: boolean = false;

  constructor(private timerData: RouteFourServiceService) {
    this.timerStart = null;
    this.timerData.pausedTime.subscribe((pauseTime) => {
      if (pauseTime !== '') {
        this.pausedTimeArray.push(`Paused at ${pauseTime}`);
      }
    });
  }

  ngOnInit(): void {}
  inputChanged(e: any) {
    this.timerData.updateTimer(e.target.value);
  }
  startPauseTimer() {
    this.start = !this.start;
    this.timerData.updateStartOrPauseStatus(this.start);
    this.timerData.updateResetStatus(false);
  }
  resetTimer() {
    this.timerStart = null;
    this.start = false;
    this.timerData.updateTimer(this.timerStart);
    this.timerData.updateStartOrPauseStatus(this.start);
    this.timerData.updateResetStatus(true);
    this.pausedTimeArray = [];
  }
}
