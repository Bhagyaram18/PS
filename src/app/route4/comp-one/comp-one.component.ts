import { Component, OnInit } from '@angular/core';
import { RouteFourServiceService } from '../route-four-service.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss'],
})
export class CompOneComponent implements OnInit {
  timer: any;
  timerInterval: any;
  constructor(private data: RouteFourServiceService) {}

  ngOnInit(): void {
    this.data.currentTimer.subscribe((newTime) => {
      this.timer = newTime;
    });

    this.data.timerStatus.subscribe((timerStarted) => {
      if (timerStarted !== '') {
        if (timerStarted) {
          this.timerInterval = setInterval(() => {
            if (this.timer > 0) {
              this.timer--;
            } else {
              clearInterval(this.timerInterval);
            }
          }, 1000);
        } else {
          clearInterval(this.timerInterval);
          this.data.updatePausedTime(this.timer);
        }
      }
    });

    this.data.resetStatus.subscribe((isReset) => {
      if (isReset) {
        this.timer = null;
      }
    });
  }
}
