import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'home',children:[
{
  path: 'dashboard',
  loadComponent: () =>
    import('./home/home.component').then((m) => m.HomeComponent),
},
{
  path: 'mobile-recharge',
  loadComponent: () =>
    import('../services/B2B/Utilites/mobile-recharge/new-mobile-recharge/new-mobile-recharge.component').then((m) => m.NewMobileRechargeComponent),
},
{
  path: 'transaction-history',
  loadComponent: () =>
    import('../services/B2B/Utilites/mobile-recharge/mobile-recharge.component').then((m) => m.MobileRechargeComponent),
},
{
  path: 'dth-recharge',
  loadComponent: () =>
    import('../services/B2B/Utilites/dth-recharge/dth-recharge.component').then((m) => m.DTHRechargeComponent),
}
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}