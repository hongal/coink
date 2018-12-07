import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ExchangeComponent} from './exchange/exchange.component';
import {BalanceComponent} from './balance/balance.component';
import {RankingComponent} from './ranking/ranking.component';
import {ServiceCenterComponent} from './service-center/service-center.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: MainComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'exchange', component: ExchangeComponent},
    {path: 'balance', component: BalanceComponent},
    {path: 'ranking', component: RankingComponent},
    {path: 'service_center', component: ServiceCenterComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
