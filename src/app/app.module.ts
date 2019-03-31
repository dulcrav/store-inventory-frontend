import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { PcAssortmentComponent } from './inventory/pc-assortment/pc-assortment.component';
import { LaptopAssortmentComponent } from './inventory/laptop-assortment/laptop-assortment.component';
import { SmartphoneAssortmentComponent } from './inventory/smartphone-assortment/smartphone-assortment.component';
import { PcItemComponent } from './inventory/pc-assortment/pc-item/pc-item.component';
import { LaptopItemComponent } from './inventory/laptop-assortment/laptop-item/laptop-item.component';
import { SmartphoneItemComponent } from './inventory/smartphone-assortment/smartphone-item/smartphone-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InventoryComponent,
    OrdersComponent,
    PcAssortmentComponent,
    LaptopAssortmentComponent,
    SmartphoneAssortmentComponent,
    PcItemComponent,
    LaptopItemComponent,
    SmartphoneItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
