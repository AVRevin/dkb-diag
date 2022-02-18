import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtComponent } from './ct/ct.component';
import { HomeComponent } from './home/home.component';
import { RentgenComponent } from './rentgen/rentgen.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { MrtComponent } from './mrt/mrt.component';


const routes: Routes = [

  { path: '', component:  HomeComponent},
  { path: 'mrt', component: MrtComponent},
  { path: 'rkt', component: CtComponent},
  { path: 'rentgen', component: RentgenComponent},
  { path: 'price', component: PriceComponent},
  { path: 'contact', component :ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
