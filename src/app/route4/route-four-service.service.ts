import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteFourServiceService {
  private timerValue = new BehaviorSubject('');
  currentTimer = this.timerValue.asObservable();

  private timerStarted = new BehaviorSubject('');
  timerStatus = this.timerStarted.asObservable();

  private timerReset = new BehaviorSubject('');
  resetStatus = this.timerReset.asObservable();

  private timerPaused = new BehaviorSubject('');
  pausedTime = this.timerPaused.asObservable();

  constructor() {}

  updateTimer(time: any) {
    this.timerValue.next(time);
  }

  updateStartOrPauseStatus(isStarted: any) {
    this.timerStarted.next(isStarted);
  }

  updateResetStatus(isReset: any) {
    this.timerReset.next(isReset);
  }

  updatePausedTime(timePaused: any) {
    this.timerPaused.next(timePaused);
  }
}
