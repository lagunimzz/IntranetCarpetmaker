import {Component} from '@angular/core';
import {StockService} from './stock.service';
@Component({
    selector: 'stocks',
    template: 
    `
        <h2>Stocks</h2>
        {{title}}
        
        <ul [ngStyle]="{'color':myColor,'font-size':mySize}">
            <li ng *ngFor="let stock of stocks">
                {{stock}}
            </li>
        </ul>

        <hr>

        <ul *ngIf="stockMarkets.length == 5">
            <li *ngFor="let stockMarket of stockMarkets">
                {{stockMarket}}
            </li>
        </ul>

        <div [ngSwitch]="market" [ngClass]="{customClass:true, centerClass:false}">
            <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
            <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
            <div *ngSwitchDefault>Cound not find a match</div>
        </div>
    `,styles: [`
        .customClass{
            color: violet;
        }
        .centerClass{
            text-align: center;
        }
    `]
})

export class StocksComponent{
    myColor ='blue';
    mySize = '200%';
    market = 'LSE';
    title = 'List of Stocks: ';
    showStockMarket = false;
    stocks;
    country = null;
    stockMarkets = ['NYSE','NASDAQ','EURONEXT','HKSE','LSE'];
    constructor(stockservice: StockService){
        this.stocks = stockservice.getStocks();
    }
}