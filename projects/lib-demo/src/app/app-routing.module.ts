import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { HospiComponent } from './hospi/hospi.component';

const routes: Routes = [
  { path: 'finance', component: FinanceComponent },
  { path: 'hospi', component: HospiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
