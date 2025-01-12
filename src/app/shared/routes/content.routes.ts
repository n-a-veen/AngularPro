import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { admin, dashboardRoutingModule } from '../../components/dashboards/dashboard.routes';

export const content: Routes = [

  { path: '', children: [
   ...dashboardRoutingModule.routes,
  ]}
];
@NgModule({
    imports: [RouterModule.forRoot(admin)],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
