import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  address: string= "Juan Pepito nº 2"
  name: string="Pizza Rogerts"
  telephone: string="156246134"

  constructor(private router: Router) {}

  goToPizzaList(){
    this.router.navigateByUrl("/my-pizzeria");
  }
}
