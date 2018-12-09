import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ExchangeComponent} from './page/exchange/exchange.component';
import {BalanceComponent} from './page/balance/balance.component';
import {ServiceCenterComponent} from './page/service-center/service-center.component';

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'service_center', component: ServiceCenterComponent},
  {path: 'exchange/:code', component: ExchangeComponent, children: [
  {path: '', redirectTo: 'exchange/code=CRIX.UPBIT.KRW-BTC', pathMatch: 'full'},
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
