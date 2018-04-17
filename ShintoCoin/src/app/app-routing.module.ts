import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from  './buy/buy.component'
import { HomeComponent } from  './home/home.component'
import { MineComponent } from  './mine/mine.component'
import { SellComponent } from  './sell/sell.component'
import { BrowseComponent } from  './browse/browse.component'
import { TransactionComponent } from  './transaction/transaction.component'



const routes: Routes = [
{ path: 'buy' , component: BuyComponent },
{ path: 'browse' , component: BrowseComponent },
{ path: 'home' , component: HomeComponent },
{ path: 'mine' , component: MineComponent },
{ path: 'sell' , component: SellComponent },
{ path: 'transaction' , component: TransactionComponent },
{ path: '' , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
