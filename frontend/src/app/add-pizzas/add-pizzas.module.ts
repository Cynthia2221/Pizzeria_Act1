import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPizzasPageRoutingModule } from './add-pizzas-routing.module';

import { AddPizzasPage } from './add-pizzas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddPizzasPageRoutingModule
  ],
  declarations: [AddPizzasPage]
})
export class AddPizzasPageModule {}
