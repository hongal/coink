import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { BalanceComponent } from './balance/balance.component';
import { RankingComponent } from './ranking/ranking.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { TopComponent } from './view/top/top.component';
import { BottomComponent } from './view/bottom/bottom.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    BalanceComponent,
    RankingComponent,
    ServiceCenterComponent,
    MainComponent,
    SigninComponent,
    TopComponent,
    BottomComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
