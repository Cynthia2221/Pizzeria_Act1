import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-my-pizzeria',
  templateUrl: './my-pizzeria.page.html',
  styleUrls: ['./my-pizzeria.page.scss'],
})
export class MyPizzeriaPage implements OnInit {

  pizzas: any= [ ];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getAllPizzas();
  }

  getAllPizzas(){
    this.pizzaService.getPizzas().subscribe(response => {
      this.pizzas= response;
    })
  }

}
