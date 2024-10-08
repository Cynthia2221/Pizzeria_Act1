import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pizzeria',
  templateUrl: './my-pizzeria.page.html',
  styleUrls: ['./my-pizzeria.page.scss'],
})
export class MyPizzeriaPage implements OnInit {

  pizzas: any = [];
  constructor(private pizzaService: PizzaService, private router: Router) { }

  ngOnInit() {
    this.getAllPizzas();
  }

  ionViewWillEnter() {
    this.getAllPizzas();
  }

  getAllPizzas() {
    this.pizzaService.getPizzas().subscribe(response => {
        console.log("Pizzas después de la eliminación:", response);
        this.pizzas = response;
    });
}

  goToHomePage() {
    this.router.navigateByUrl("/home")
  }

  goToPizzasUpdate(id: any) {
    this.pizzaService.setCardId(id);
    this.router.navigateByUrl("/update-pizzas")
  }

  goToCreatePizza() {
    this.router.navigateByUrl("/add-pizzas");
}

  updatePizzas(s: any, index: number) {
    this.pizzaService.setCardId(index + 1);
    this.router.navigate(['/update-pizza-page']);
  }

  deletePizza(id: any) {
    this.pizzaService.delete(id).subscribe((response) => {
      this.getAllPizzas();
    });
  }
}