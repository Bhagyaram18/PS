import { Component, OnInit } from '@angular/core';
import { RouteFourServiceService } from '../route-four-service.service';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.scss'],
})
export class CompThreeComponent implements OnInit {
  timeStampArray: Array<any> = [];
  constructor(private timerData: RouteFourServiceService) {}

  ngOnInit(): void {
    this.timerData.timerStatus.subscribe((isStarted) => {
      if (isStarted !== '') {
        if (isStarted) {
          this.timeStampArray.push(
            `Started at ${new Date().toLocaleString('en-US', { hour12: true })}`
          );
        } else {
          this.timeStampArray.push(
            `Paused at ${new Date().toLocaleString('en-US', { hour12: true })}`
          );
        }
      }
    });

    this.timerData.resetStatus.subscribe((isReset) => {
      if (isReset) {
        this.timeStampArray = [];
      }
    });
  }
}
