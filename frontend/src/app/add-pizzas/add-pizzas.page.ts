import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pizzas',
  templateUrl: './add-pizzas.page.html',
  styleUrls: ['./add-pizzas.page.scss'],
})
export class AddPizzasPage implements OnInit {

  pizzaForm: FormGroup;

  constructor(private pizzaService: PizzaService, public formBuilder: FormBuilder) {
    this.pizzaForm= this.formBuilder.group({
      address:['', Validators.compose([Validators.required])],
      name:['', Validators.compose([Validators.required])],
      telephone:['', Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
  }

  createPizza(){
    if(!this.pizzaForm.valid){
      console.log("No es válido")
      return
    }

    const address= this.pizzaForm.value.address;
    const name= this.pizzaForm.value.name;
    const telephone= this.pizzaForm.value.telephone;

    this.pizzaService.create(address, name,telephone).subscribe((response) => {
      console.log("se creó la pizza");
      })
  }

  getFormControl(field: string){
    return this.pizzaForm.get(field);
  }

}
