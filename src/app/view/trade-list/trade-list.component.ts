import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {DayTradeData} from '../../data/day-trade-data';
import {TimeTradeData} from '../../data/time-trade-data';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.sass']
})
export class TradeListComponent implements OnInit {
  @Input()
  dayTradeList: DayTradeData[];
  @Input()
  timeTradeList: TimeTradeData[];
  dayList: boolean;
  timeList: boolean;
  constructor(private appService: AppService, private data: DataService) {
    this.dayList = false;
    this.timeList = true;
  }

  ngOnInit() {

  }

  sendPrice(tradeVolume: string, tradePrice: string, changePrice: string) {
    let name: string[] = [tradeVolume, tradePrice, changePrice];
    this.data.changeMessage(name);
  }

  toTime(){
    this.timeList = true;
  }

  toDay(){
    this.timeList = false;
  }

}
