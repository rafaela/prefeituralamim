import { Injectable } from '@angular/core';
import { BehaviorSubject, retry, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new Subject<any>();
  loading$ = this.loadingSubject.asObservable();

  constructor() {}

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}
