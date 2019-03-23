import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { PcAssortmentComponent } from './inventory/pc-assortment/pc-assortment.component';
import { LaptopAssortmentComponent } from './inventory/laptop-assortment/laptop-assortment.component';
import { SmartphoneAssortmentComponent } from './inventory/smartphone-assortment/smartphone-assortment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InventoryComponent,
    OrdersComponent,
    PcAssortmentComponent,
    LaptopAssortmentComponent,
    SmartphoneAssortmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
