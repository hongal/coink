import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './page/exchange/exchange.component';
import { BalanceComponent } from './page/balance/balance.component';
import { ServiceCenterComponent } from './page/service-center/service-center.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './page/signin/signin.component';
import { TopComponent } from './view/top/top.component';
import { BottomComponent } from './view/bottom/bottom.component';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDividerModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './view/left/left.component';
import {HttpClientModule} from '@angular/common/http';
import { TradeListComponent } from './view/trade-list/trade-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DotPipe} from './pipe/dot.pipe';
import { CoinListComponent } from './view/coin-list/coin-list.component';
import { CoinPurchaseComponent } from './view/coin-purchase/coin-purchase.component';
import { CoinChartComponent } from './view/coin-chart/coin-chart.component';
import { PriceListComponent } from './view/price-list/price-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    BalanceComponent,
    ServiceCenterComponent,
    MainComponent,
    SigninComponent,
    TopComponent,
    BottomComponent,
    HomeComponent,
    LeftComponent,
    TradeListComponent,
    DotPipe,
    CoinListComponent,
    CoinPurchaseComponent,
    CoinChartComponent,
    PriceListComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    HttpClientModule,
    NgScrollbarModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
