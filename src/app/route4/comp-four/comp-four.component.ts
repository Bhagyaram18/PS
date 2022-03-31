import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { RouteFourServiceService } from '../route-four-service.service';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.scss'],
})
export class CompFourComponent implements OnInit {
  startedCount = 0;
  pausedCount = 0;
  constructor(private timerData: RouteFourServiceService) {}

  ngOnInit(): void {
    this.timerData.timerStatus.subscribe((isStarted) => {
      if (isStarted !== '') {
        if (isStarted) {
          this.startedCount++;
        } else {
          this.pausedCount++;
        }
      }
    });

    this.timerData.resetStatus.subscribe((isReset) => {
      if (isReset) {
        this.startedCount = 0;
        this.pausedCount = 0;
      }
    });
  }
}
