import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {DayTradeData} from '../../data/day-trade-data';
import {TimeTradeData} from '../../data/time-trade-data';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.dayList = false;
    this.timeList = true;
  }

  ngOnInit() {
  }

/*  getData(code: string){
    this.appService.getTradeResult(code)
      .subscribe(data => {
        console.log(data);
        this.dayTradeList = data[0];
        this.timeTradeList = data[1];
      });
  }*/

  toTime(){
    this.timeList = true;
  }

  toDay(){
    this.timeList = false;
  }

}
