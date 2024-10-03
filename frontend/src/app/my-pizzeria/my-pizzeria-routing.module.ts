import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPizzeriaPage } from './my-pizzeria.page';

const routes: Routes = [
  {
    path: '',
    component: MyPizzeriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPizzeriaPageRoutingModule {}
