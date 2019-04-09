import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobenLibCommonModule } from '@coben-lib/common';
import { FinanceComponent } from './finance/finance.component';
import { HospiComponent } from './hospi/hospi.component';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    HospiComponent
  ],
  imports: [
    BrowserModule,
    CobenLibCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
