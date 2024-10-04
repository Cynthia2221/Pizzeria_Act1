import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePizzasPage } from './update-pizzas.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePizzasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePizzasPageRoutingModule {}
