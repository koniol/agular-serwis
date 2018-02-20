import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClickService {

  private counter = 0;

  private sum = new Subject<number>();

  constructor() { }

  addClick() {
    this.counter++;
    this.sum.next(this.counter);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
