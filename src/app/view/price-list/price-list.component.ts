import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';
import {DayTradeData} from '../../data/day-trade-data';
import {TimeTradeData} from '../../data/time-trade-data';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.sass']
})
export class PriceListComponent implements OnInit {
  @Input()
  priceList: TimeTradeData[];
  code: string;
  priceTab: number;

  constructor() {
    this.priceTab = 1;

  }

  ngOnInit() {
/*    this.timeTradeList.sort((a, b) => a.tradePrice < b.tradePrice ? -1 : a.tradePrice > b.tradePrice ? 1 : 0)
    this.timeTradeList.slice(0, 19);*/
  }

  priceTabChange(position: number){
    if(position !== this.priceTab){
      this.priceTab = position;
    }
  }
}
