import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPizzasPage } from './add-pizzas.page';

const routes: Routes = [
  {
    path: '',
    component: AddPizzasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPizzasPageRoutingModule {}
