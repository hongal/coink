import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';
import {DayTradeData} from '../../data/day-trade-data';
import {TimeTradeData} from '../../data/time-trade-data';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.sass']
})
export class ExchangeComponent implements OnInit {
  showNormalPrice: boolean;
  code: string;
  dayTradeList: DayTradeData[];
  timeTradeList: TimeTradeData[];
  priceList: TimeTradeData[];

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.route.params
      .subscribe(params =>
        this.code = params.code
      );

    this.route.params
      .subscribe(params => {
        this.getData(params.code);
      });
  }

  ngOnInit() {
    this.showNormalPrice = true;
  }
  getData(code: string){
    this.appService.getTradeResult(code)
      .subscribe(data => {
        console.log(data);
        this.dayTradeList = data[0];
        this.timeTradeList = data[1];
        this.priceList = Object.assign([], this.timeTradeList);
        this.priceList.sort((a, b) => a.tradePrice < b.tradePrice ? -1 : a.tradePrice > b.tradePrice ? 1 : 0);
        this.priceList.slice(0, 19);
        console.log(this.priceList);
      });
  }

}
