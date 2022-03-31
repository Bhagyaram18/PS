import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.scss'],
})
export class CompThreeComponent implements OnInit, OnChanges {
  @Input() isStarted: any;
  @Input() isTimerCleared: any;
  timeStampArray: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.['isStarted']?.currentValue !== undefined &&
      changes?.['isStarted'].currentValue !== null
    ) {
      if (this.isStarted) {
        this.timeStampArray.push(
          `Started at ${new Date().toLocaleString('en-US', { hour12: true })}`
        );
      } else {
        this.timeStampArray.push(
          `Paused at ${new Date().toLocaleString('en-US', { hour12: true })}`
        );
      }
    }
    if (this.isTimerCleared) {
      this.timeStampArray = [];
    }
  }
}
