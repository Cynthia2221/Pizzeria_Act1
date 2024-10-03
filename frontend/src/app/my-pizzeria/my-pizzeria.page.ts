import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-my-pizzeria',
  templateUrl: './my-pizzeria.page.html',
  styleUrls: ['./my-pizzeria.page.scss'],
})
export class MyPizzeriaPage implements OnInit {

  pizzas: any= [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getAllPizzas();
  }

  pizzas_a: Array<any>= [
    {
      address:"c/ luján pérez",
      name: "Pizza Rogerts",
      telephone: "928676767",
    
    },
    {
      address:"c/ josé vélez",
      name: "Domino's Pizza",
      telephone: "928676767",
    
    },
    {
      address:"c/ juan rejón",
      name: "Domino's Pizza",
      telephone: "928676767",
    
    },
  ]

  getAllPizzas(){
    this.pizzaService.getPizzas().subscribe(response => {
      this.pizzas= response;
    })
  }

  // goToDelete(id: any){
  // //   this.pizzaService.delete(id).subscribe(response => {
  //         this.getAllPizzas();
  //   })
  // }

  // delete(id: any){
  //   return this.httpClient.delete(`${this.serverUrl}/${id}`);
  // }

}
