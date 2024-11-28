import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pizza } from '../pizza.model';
@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})
export class ListaPizzeComponent {

  @Input({required:true}) pizze!: Pizza[];

  @Output() selectPizza = new EventEmitter();

  onSelectedPizza(id: number){
    this.selectPizza.emit(id);
  }
  

}
