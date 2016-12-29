import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { HighlightDirective } from './highlight.directive';
import { StockService } from './stock.service';
import { RepairService } from './repair.service';
import { DateFormatterPipe } from './date-formatter.pipe'
import { routing } from './app.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepairComponent } from './repair/repair.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HighlightDirective,
    DashboardComponent,
    MutualfundsComponent,
    StockDirectiveDirective,
    DateFormatterPipe,
    RepairComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [StockService,RepairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
