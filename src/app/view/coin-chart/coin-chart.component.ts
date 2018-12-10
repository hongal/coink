import {Component, Input, OnInit} from '@angular/core';
import {TimeTradeData} from '../../data/time-trade-data';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-coin-chart',
  templateUrl: './coin-chart.component.html',
  styleUrls: ['./coin-chart.component.sass']
})
export class CoinChartComponent implements OnInit {
  @Input()
  chartList: TimeTradeData[];
  coinName: string;
  coinCode: string;
  tradeVolume: string;
  tradePrice: string;
  changePrice: string;
  type: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.coinName = message[0];
      this.coinCode = message[1];
      this.type = message[2];
    });

/*    this.data.priceMessage.subscribe(message => {
      console.log(message);
      this.tradeVolume = message[0];
      this.tradePrice = message[1];
      this.changePrice = message[2];
    });*/
  }

}
