import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-pizzas',
  templateUrl: './update-pizzas.page.html',
  styleUrls: ['./update-pizzas.page.scss'],
})
export class UpdatePizzasPage implements OnInit {


  pizza: any = {}
  card: any;
  type = [
    {
      id: 1,
      name: 'Margarita'
    },
    {
      id: 2,
      name: 'Carbonara'
    }
  ]
  constructor(private pizzaService: PizzaService, private router: Router) { }

  viewEnter() {
    this.card = this.pizzaService.getCardId();
  }

  ngOnInit() {
  }

  updatePizza(){
    this.pizzaService.update(this.card, this.pizza).subscribe((res: any) => {
      this.router.navigate(['update-pizzas']);
    },
    (error:any)=> {
      console.error('error al actualizar', error)
    })
  };

}
