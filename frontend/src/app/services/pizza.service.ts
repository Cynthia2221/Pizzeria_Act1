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

  private name: string = '';

  setName(value: string) {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }

  private selectedCardId: number | null = null;

  setCardId(id: number) {
    this.selectedCardId = id;
  }

  getCardId(): number | null {
    return this.selectedCardId;
  }

  createPizza(pizza: any){
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(this.endpoint, JSON.stringify(pizza), {
      headers,
    });
  };

  delete(id: any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  update(id: any, pizza: any){
    return this.httpClient.put(`${this.endpoint}/${id}`, pizza);
  }

  //   create(pizza: any) {
  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     });

  //     const body = new URLSearchParams();
  //     body.append("address", pizza.address);
  //     body.append("name", pizza.name);
  //     body.append("telephone", pizza.telephone);

  //     return this.httpClient.post(this.endpoint, body.toString(), { headers }); // Convertir a string
  //   }
}

