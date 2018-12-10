import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coin-purchase',
  templateUrl: './coin-purchase.component.html',
  styleUrls: ['./coin-purchase.component.sass']
})
export class CoinPurchaseComponent implements OnInit {
  buyTab: number;
  titleText: string

  constructor(private route: ActivatedRoute) {
    this.titleText = '매수';
    this.buyTab = 1;
  }

  ngOnInit() {
  }
  onTabClick(event){
    console.log(event);
    switch (event.index){
      case 0:
        this.buyTab = event.index + 1;
        this.titleText = '매수';
        break
      case 1:
        this.buyTab = event.index + 1;
        this.titleText = '매도';
        break;
      case 2:
        this.buyTab = event.index + 1;
        this.titleText = '거래내역';
        break
    }
  }

/*  buyTabChange(position: number){
    if(position !== this.buyTab){
      this.buyTab = position;

      switch (this.buyTab) {
        case 1:
          this.titleText = '매수';
          break;
        case 2:
          this.titleText = '매도';
          break;
        case 3:
          this.titleText = '거래내역';
          break;
      }
    }

  }*/



}
