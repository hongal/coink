import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {CoinListData} from '../../data/coin-list-data';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.sass']
})
export class CoinListComponent implements OnInit {
  listType: string;
  coinList: CoinListData[];
  insertList: CoinListData[];
  localName: string;
  coinOpened: boolean;

  constructor(private appService: AppService, private data: DataService) {
    this.listType = 'KRW';
    this.coinOpened = true;
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
    if(this.insertList[0].koreanName !== null){
      this.changeData(this.insertList[0].koreanName, this.insertList[0].baseCurrencyCode, this.insertList[0].pair);
    }
    console.log(this.insertList);
  }

  changeData(koreanName: string, code: string, pair: string) {
    let name: string[] = [koreanName, code];
    this.data.changeMessage(name);
  }

  hideView(){
    console.log('sadf');
  }

  moveCoin(open: boolean){
    this.coinOpened = open;
    console.log(this.coinOpened);
  }



}
