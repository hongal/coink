export class ExchangeChartData {

  constructor(private code: string,
              private candleDateTime: string,
              private candleDateTimeKst: string,
              private openingPrice: number,
              private highPrice: number,
              private lowPrice: number,
              private tradePrice: number,
              private candleAccTradeVolume: number,
              private candleAccTradePrice: number,
              private timestamp: number,
              private unit: number){

  }

}
