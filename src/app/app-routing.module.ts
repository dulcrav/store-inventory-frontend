import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { PcAssortmentComponent } from './inventory/pc-assortment/pc-assortment.component';
import { LaptopAssortmentComponent } from './inventory/laptop-assortment/laptop-assortment.component';
import { SmartphoneAssortmentComponent } from './inventory/smartphone-assortment/smartphone-assortment.component';
import { PcItemComponent } from './inventory/pc-assortment/pc-item/pc-item.component';
import { LaptopItemComponent } from './inventory/laptop-assortment/laptop-item/laptop-item.component';
import { SmartphoneItemComponent } from './inventory/smartphone-assortment/smartphone-item/smartphone-item.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent, children: [
    { path: 'pcs', component: PcAssortmentComponent, pathMatch: 'full'},
    { path: 'pcs/:id', component: PcItemComponent, pathMatch: 'full'},
    { path: 'laptops', component: LaptopAssortmentComponent, pathMatch: 'full'},
    { path: 'laptops/:id', component: LaptopItemComponent, pathMatch: 'full'},
    { path: 'smartphones', component: SmartphoneAssortmentComponent, pathMatch: 'full'},
    { path: 'smartphones/:id', component: SmartphoneItemComponent, pathMatch: 'full'}
  ]},
  { path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
