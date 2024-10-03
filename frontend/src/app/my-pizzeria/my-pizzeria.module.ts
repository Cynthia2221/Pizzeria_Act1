import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPizzeriaPageRoutingModule } from './my-pizzeria-routing.module';

import { MyPizzeriaPage } from './my-pizzeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPizzeriaPageRoutingModule
  ],
  declarations: [MyPizzeriaPage]
})
export class MyPizzeriaPageModule {}
