import { Component } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { DUMMY_PIZZA } from './DUMMY_PIZZA';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [PizzaComponent, ListaPizzeComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})
export class PizzeriaComponent {
  // array di pizze 
  pizze:Pizza[] = DUMMY_PIZZA;
  // id pizza selezionata che arriva dall'output di listapizze
  idPizzaSelezionata!: number;
  // Pizza selezionata tramite id che è arrivato
  pizzaSelezionata !: any;



  // evento che contiene id della pizza selezionata
  onSelectPizza(id: number){
    console.log(`siamo dentro pizzeria e id pizza è ${id}`);
    this.idPizzaSelezionata = id;
    this.pizzaSelezionata = this.pizze.filter((pizza)=> pizza.id === id);
    this.pizzaSelezionata = this.pizzaSelezionata.pop();
    
  }


}
