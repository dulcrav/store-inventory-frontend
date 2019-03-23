import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { PcAssortmentComponent } from './inventory/pc-assortment/pc-assortment.component';
import { LaptopAssortmentComponent } from './inventory/laptop-assortment/laptop-assortment.component';
import { SmartphoneAssortmentComponent } from './inventory/smartphone-assortment/smartphone-assortment.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent, children: [
    { path: 'pcs', component: PcAssortmentComponent},
    { path: 'laptops', component: LaptopAssortmentComponent},
    { path: 'smartphones', component: SmartphoneAssortmentComponent}
  ]},
  { path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
