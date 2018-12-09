import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {CoinListData} from '../../data/coin-list-data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.sass']
})
export class CoinListComponent implements OnInit {
  listType: string;
  coinList: CoinListData[];
  insertList: CoinListData[];

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.listType = 'KRW';
/*
    this.route.params
      .subscribe(params => {
        console.log(params);
      });
*/

  }

  ngOnInit() {

    this.appService.getCoinList()
      .subscribe(data => {
        this.coinList = data;
      }, error => {console.log(error)},
        () => {
        this.changeList(this.listType);
        });

  }

  changeList(type: string){
    if(this.listType !== type){
      this.listType = type;
    }
    this.insertList = this.coinList.filter(v =>
      v.quoteCurrencyCode === this.listType && v.marketState === 'ACTIVE'
    );
    console.log(this.insertList);
  }

  changeData(key: string){

  }

}
