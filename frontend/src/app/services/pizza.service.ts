import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  endpoint = 'http://localhost:8080/api/pizzas';

  constructor(private httpClient: HttpClient) { }

  getPizzas() {
    return this.httpClient.get(this.endpoint);
  }

  create(pizza: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("address", pizza.address);
    body.append("name", pizza.name);
    body.append("telephone", pizza.telephone);
    
    return this.httpClient.post(this.endpoint, body.toString(), { headers }); // Convertir a string
  }
}

