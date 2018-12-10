import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
@Injectable()
export class DataService {

  private messageSource: Subject<any> = new Subject();
  private priceSubject: Subject<any> = new Subject();
  currentMessage = this.messageSource.asObservable();
  priceMessage = this.priceSubject.asObservable();

  constructor() { }

  changeMessage(name: string[]) {
    this.messageSource.next(name);
  }

  getPrice(price: string[]){
    this.priceSubject.next(price);
  }

}
