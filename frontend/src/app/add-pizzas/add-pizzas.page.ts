import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pizzas',
  templateUrl: './add-pizzas.page.html',
  styleUrls: ['./add-pizzas.page.scss'],
})
export class AddPizzasPage implements OnInit {

  pizzaForm: FormGroup;

  type = [
    {
      id: 1,
      name: 'Margarita',
    },
    {
      id: 2,
      name: 'Carbonara',
    },
  ];

  trackItems(index: number, item: any) {
    return item.id;
  }

  constructor(private pizzaService: PizzaService, private router: Router,public formBuilder: FormBuilder) {
    this.pizzaForm = this.formBuilder.group({
      address: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      telephone: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createPizza() {
    if (this.pizzaForm.valid) {
      console.log('Es válida esta pizza', this.pizzaForm.value);
      this.pizzaService.createPizza(this.pizzaForm.value).subscribe((response) => {
        this.router.navigate(['/add-pizzas']);
      });
    } else {
      console.log('No es válido');
    }
  }
  


goToHome() {
  this.router.navigateByUrl("/home");
}

}

