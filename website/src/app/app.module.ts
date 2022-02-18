import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CtComponent } from './ct/ct.component';
import { RentgenComponent } from './rentgen/rentgen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { MrtComponent } from './mrt/mrt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriceMrtComponent } from './price-mrt/price-mrt.component';
import { PriceRktComponent } from './price-rkt/price-rkt.component';
import { PriceRentgenComponent } from './price-rentgen/price-rentgen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    CtComponent,
    RentgenComponent,
    FooterComponent,
    PriceComponent,
    FooterComponent,
    PriceComponent,
    ContactComponent,
    MrtComponent,
    PriceMrtComponent,
    PriceRktComponent,
    PriceRentgenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
