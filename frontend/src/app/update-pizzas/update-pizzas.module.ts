import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePizzasPageRoutingModule } from './update-pizzas-routing.module';

import { UpdatePizzasPage } from './update-pizzas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePizzasPageRoutingModule
  ],
  declarations: [UpdatePizzasPage]
})
export class UpdatePizzasPageModule {}
