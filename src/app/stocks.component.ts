import {Component} from '@angular/core';
import {StockService} from './stock.service';
@Component({
    selector: 'stocks',
    template: 
    `
        <h2>Stocks</h2>
        {{title}}
        
        <ul>
            <li ng *ngFor="let stock of stocks">
                {{stock}}
            </li>
        </ul>
    `
})

export class StocksComponent{
    title = 'List of Stocks: ';
    // stocks=['APPL','IBM','GOOG','UDEMY'];
    stocks;
    constructor(stockservice: StockService){
        this.stocks = stockservice.getStocks();
    }
}