import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.scss'],
})
export class CompFourComponent implements OnInit {
  @Input() isStarted: any;
  @Input() isTimerCleared: any;

  startedCount = 0;
  pausedCount = 0;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.['isStarted']?.currentValue !== undefined &&
      changes?.['isStarted'].currentValue !== null
    ) {
      if (this.isStarted) {
        this.startedCount++;
      } else {
        this.pausedCount++;
      }
    }
    if (this.isTimerCleared) {
      this.startedCount = 0;
      this.pausedCount = 0;
    }
  }
}
