import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {DayTradeData} from './data/day-trade-data';
import {HttpClient} from '@angular/common/http';
import {TimeTradeData} from './data/time-trade-data';
import {CoinListData} from './data/coin-list-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getTradeResult(code: string): Observable<any[]>{
    const dayTradeResult = this.http
      .get(`https://crix-api-cdn.upbit.com/v1/crix/trades/days?code=${code}&count=20`);
    const timeTradeResult = this.http
      .get(`https://crix-api-cdn.upbit.com/v1/crix/trades/ticks?code=${code}&count=20`);
    return forkJoin(dayTradeResult, timeTradeResult);
  }

  getCoinList(): Observable<CoinListData[]> {
    return this.http.get<CoinListData[]>
    (`https://s3.ap-northeast-2.amazonaws.com/crix-production/crix_master?nonce=1544270044651`);
  }
}
